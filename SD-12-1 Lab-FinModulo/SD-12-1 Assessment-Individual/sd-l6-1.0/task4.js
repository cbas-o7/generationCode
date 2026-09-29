// Task 4: delUser(number)
export async function delUser(id) {

   try {
    //Se hace metodo DELETE para eliminar un objeto
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
 
    //Se hace metodo GET para traer la base de datos
    const getResponse = await fetch("http://localhost:3000/users")
    const res = await getResponse.json();
    console.log(res);
  } catch (error) {
    console.error("Error al borrar la publicación:", error);
  } 

}
