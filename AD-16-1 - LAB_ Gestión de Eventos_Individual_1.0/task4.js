let container = document.getElementById("container")
let classSecond = container.getElementsByClassName("second")
let ilOl = document.querySelector('ol li.second');
let footer = document.querySelector('.footer');



container.innerHTML  += "¡Hola!"

footer.classList.add("principal")
footer.classList.remove("principal")

let newLi = document.createElement("li")
const node = document.createTextNode("Cuatro");
newLi.append(node)

const element = document.getElementById("addCuatro");
element.appendChild(newLi);

console.log(ilOl)