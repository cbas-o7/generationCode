// Task 3: addUser(first_name, last_name, email)

export async function addUser(firstName, lastName, email) {
    //Este pedazo trae la base de datos y agarra el ultimo objeto para sumarle un +1 al ultimo id
    const response = await fetch("http://localhost:3000/users")
    const res = await response.json();
    let newId = res.at(-1).id
    newId += 1

   try {
    //Se hace un fetch con metodo POST para agregar un nuevo objeto a la base de datos
    const postResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
            id: newId,
            first_name: firstName,
            last_name: lastName,
            email: email
        }),
    });

    //Aqui se espera la respuesta de la peticion POST que de ser exitosa mostrara el nuevo usuario 
    const newUser = await postResponse.json();
    console.log(newUser);
  } catch (error) {
    console.error("Error al crear publicación:", error);
  } 

}
