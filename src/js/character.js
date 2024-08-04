export class Character {
    constructor(name, attack) {
        this.name = name;
        this._attack = attack;
        this.distance = 1;
        this.stoned = false;
    }

    get attack() {
        let attackValue = this._attack * (1 - (this.distance - 1) * 0.1);
        if (this.stoned) {
            attackValue -= Math.log2(this.distance) * 5;
        }
        return Math.max(0, Math.round(attackValue)); 
    }

    set attack(value) {
        this._attack = value;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }
}