// Type your code below this line!
function ShopingList() {
    this.item = {}

    this.addItem = function (product, quantity) {
        this.item[product] = quantity
    }
}

// Type your code above this line!
let itemsToAdd = Number(prompt("Agrega el numero de productos que quieres agregar: "))

let shoppingList = new ShopingList()
for(let i = 0; i < itemsToAdd; i++) {
    let product = prompt((i+1) + ".- Agrega el nuevo producto: ")
    let quantity = prompt("Agrega la cantidad del producto: ")

    shoppingList.addItem(product, quantity)
}

console.log(shoppingList.item)
