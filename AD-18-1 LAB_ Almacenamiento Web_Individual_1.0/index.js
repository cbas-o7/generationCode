const itemsContainer = document.querySelector("#list-items");

function addItem(item) {
  
  
  const colourCard = document.createElement("section");
  colourCard.className = "card w-75";
  itemsContainer.append(colourCard);

  const colourCardBody = document.createElement("article");
  colourCardBody.className = "card-body";
  colourCard.append(colourCardBody);

  const colourCardTitle = document.createElement("h5");
  colourCardTitle.className = "card-title";
  colourCardTitle.innerText = item.name;
  colourCardBody.append(colourCardTitle);

  const colourCardText = document.createElement("p");
  colourCardText.className = "card-text";
  colourCardText.innerText = item.pantone_value;
  colourCardBody.append(colourCardText);

  const colourCardColour = document.createElement("figure");
  colourCardColour.style = "background-color: " + item.color + ";";
  colourCardColour.innerText = item.color;
  colourCardBody.append(colourCardColour);

  const colourCardBreak = document.createElement("br");
  itemsContainer.append(colourCardBreak);
}

let datos;

fetchColorsList = async () => {
  datos.forEach((e) => {
    if (localStorage.getItem("data")) {
      addItem(e);
    }
  });
};

loadColorsFromStorage = async () => {
  let datosStorage = localStorage.getItem("data");
  

  //Si hay cache busca la informacion en localStorage
  //Si no hay cache llama a la API y la guarda en localStorage
  if (datosStorage) {
    datos = JSON.parse(datosStorage);
  } else {
    let res = await fetch("https://reqres.in/api/unknown");
    datos = await res.json();

    localStorage.setItem("data", JSON.stringify(datos.data));
    datos = datos.data;
  }

};

reload = () => {
  itemsContainer.innerHTML = ""
  loadColorsFromStorage();
  fetchColorsList();
}

loadColorsFromStorage();
fetchColorsList();

