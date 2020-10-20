const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".themes")

// Look up addEventListener()
// Listen to the browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("btnThem--")) {

        // Get the chosen color
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        
            // Create a new custom event, with a good name, and add a
            // property to the 'detail' object that specifies which
            // color was chosen.
        
            const 
         
    }
}

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
    <button class="themeButton" id="btnTheme--red">Red</button>
    <button class="themeButton" id="btnTheme--purple">Purple</button>
    <button class="themeButton" id="btnTheme--blue">Blue</button>
    <button class="themeButton" id="btnTheme--green">Green</button>
`
}

