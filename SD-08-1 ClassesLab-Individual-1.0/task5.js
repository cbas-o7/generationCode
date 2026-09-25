export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = 0
    this.expGap = 20
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  gainExp(exp) {
    this.exp += exp

    if(this.exp >= this.expGap){
      this.exp -= expGap
      this.level += 1;
      this.info()
    }
  }
}
