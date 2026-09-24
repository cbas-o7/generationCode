// Type your code below this line!
function FriendList() {
    this.friends = []

    this.pushFriend = function (friend) {
        this.friends.push(friend)
    }
}

// Type your code above this line!
let friendsToAdd = Number(prompt("Agrega el numero de amigos que quieres agregar: "))

let friendList = new FriendList()
for(let i = 0; i < friendsToAdd; i++) {
    let friend = prompt(i + ".- Agrega a un nuevo amigo: ")
    friendList.pushFriend(friend)
}

console.log(friendList.friends)


