// Make
let comeToBurger = document.getElementById("comeToBurger")
let easterEgg = document.getElementById("easterEgg")
let pictureText = document.getElementById("pictureText")

comeToBurger.addEventListener("click", () => {
    alert("ES HORA DE UNA HAMBURGESA!!")
})

easterEgg.addEventListener("click", () => {
    console.log("¡Alguien le ha dado clic en BURGER TOWN!")
})


turnToRed = () => {
    pictureText.style.color = "red"
}
