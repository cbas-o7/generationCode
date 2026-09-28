export class FriendAge {

    constructor (name, year, month, day) {
        this.name = name
        this.year = year
        this.month = month
        this.day = day
    }
  returnAge() {
    const a = new Date(this.year, this.month, this.day);

    const MINUTE = 1000 * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const YEAR = DAY * 365;

    let age = (Date.now() - a.getTime()) / YEAR;
    age = Math.floor(age)
    return `${this.name} is ${age} today!`
  }
}
