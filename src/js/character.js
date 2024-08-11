export class Character {
    constructor(baseAttack) {
        this.baseAttack = baseAttack;
        this._distance = 1;
        this._stoned = false;
    }

    get attack() {
        let attackValue = this.baseAttack * (1 - (this._distance - 1) * 0.1);
        if (this._stoned) {
            attackValue -= Math.log2(this._distance) * 5;
        }
        return attackValue > 0 ? Math.round(attackValue) : 0;
    }

    set attack(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Attack value must be a positive number');
        }
        this.baseAttack = value;
    }

    get distance() {
        return this._distance;
    }

    set distance(value) {
        if (typeof value !== 'number' || value < 1 || value > 5) {
            throw new Error('Distance must be a number between 1 and 5');
        }
        this._distance = value;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Stoned value must be a boolean');
        }
        this._stoned = value;
    }
}
