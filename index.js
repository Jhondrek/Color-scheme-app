
const getSchemeBtn = document.getElementById("get-scheme-btn")
const schemeValue = document.getElementById("scheme-mode")
const colorInput = document.getElementById("color-input")
const mainContainer = document.getElementById("main-container")

getColorScheme()

//Listeners

mainContainer.addEventListener("click", function(e){
    if(e.target.tagName === "DIV"){
        console.log()
        navigator.clipboard.writeText(e.target.children[0].textContent);
        alert("Color value copied successfully! ");
    }else{
        navigator.clipboard.writeText(e.target.textContent);
        alert("Color value copied successfully! ");
    }

    // Copy the text inside the text field

  // Alert the copied text
  
})

getSchemeBtn.addEventListener("click", function(){
    
    const formattedColor = formattingHexString(colorInput.value)
    getColorScheme(formattedColor, schemeValue.value)
    
})

function getColorScheme(colorValue = "000000", selectedMode = "monochrome"){
    console.log(colorValue)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectedMode}&count=5`)
    .then(res =>res.json())
    .then(data=> {
        renderColors(data)
    })
}

function renderColors(data){
    let divHtml = ""
        for(let i = 0; i< data.colors.length; i++){
            divHtml += `
            <div class="colorPanel" style="background-color: ${data.colors[i].hex.value};">
                <p id="colorCode1">${data.colors[i].hex.value}</p>
            </div>`
        }
        mainContainer.innerHTML = divHtml
}

function formattingHexString(rgbValue){
    const formattedRgbString = `${rgbValue.slice(1,7)}`
    return formattedRgbString
}