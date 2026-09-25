// Type your code below this line!
function FriendList() {
    this.friends = []

    this.pushFriend = function (friend) {
        this.friends.push(friend)
    }
}

// Type your code above this line!
//Se agrega por linea de comandos el numero que se quieren agregar
let friendsToAdd = process.argv[3] 
let x =  4 //Pensado como el argumento que ira subiendo en el ciclo para process.argv[x]


let friendList = new FriendList()
for(let i = 0; i < friendsToAdd; i++) {
    friendList.pushFriend(process.argv[x])
    x++

}

console.log(friendList.friends)


