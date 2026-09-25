export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = 0;
    this.expGap = 20;
    this.party = [];
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  gainExp(exp) {
    this.exp += exp;

    if (this.exp >= this.expGap) {
      this.exp -= this.expGap;
      this.level += 1;
    }
  }

  addPartyMember(player) {
    this.party.push(player);
  }

  removePartyMember(player) {
    let position = this.party.indexOf(player);

    if (position != -1) {
      this.party.splice(position, 1);
    }
  }
}
