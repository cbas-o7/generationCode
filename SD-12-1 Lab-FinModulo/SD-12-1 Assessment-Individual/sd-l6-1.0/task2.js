// Task 2: listUsers()
export async function listUsers() {
    //Se hace metodo GET para traer la base de datos
    const response = await fetch("http://localhost:3000/users")
    const res = await response.json();
    console.log(res)

}
