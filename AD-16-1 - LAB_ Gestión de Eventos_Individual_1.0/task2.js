const form = document.getElementById("form1");

getFormvalue = (event) => {
  event.preventDefault();

  const form = event.target;

  const nombre = form.elements["fname"].value;
  const apellido = form.elements["lname"].value;

  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
};
