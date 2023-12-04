function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute("src","./assets/Burger-King-Emblem.png")
    } else{
        img.setAttribute("src", "./assets/Burger-King-Emblema.png")
    }
}