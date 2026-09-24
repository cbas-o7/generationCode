// Type your code below this line!
function Car() {
    
    this.model
    this.year
    this.doors
    this.engine
    this.color
    
    this.addDetails = function (model, year, doors, engine, color) {
        this.model = model
        this.year = year
        this.doors = doors
        this.engine = engine
        this.color = color
    }

}

// Type your code above this line!
const newCar = new Car()
newCar.addDetails(process.argv[2], process.argv[3], process.argv[4], process.argv[5],process.argv[6])



console.log(newCar.model)
console.log(newCar.year)
console.log(newCar.doors)
console.log(newCar.engine)
console.log(newCar.color)
