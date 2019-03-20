export class Mario {
    _xPosition: number;
    _yPosition: number;
    _coins: number;
    _HP: number;
    _height: number;
    _lenght: number;

    constructor(xPosition: number, yPosition: number,coins:number,HP:number, height: number, lenght: number) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.coins = coins;
        this.HP = HP;
        this.height = height;
        this.lenght = lenght;
    }

    get xPostion(): number {
        return this._xPosition;
    }
    set xPosition(newXPosition: number) {
        this.xPosition = newXPosition;
    }

    get yPosition(): number {
        return this._yPosition;
    }
    set yPosition(newYPosition: number) {
        this.yPosition = newYPosition;
    }

    get coins(): number {
        return this._coins;
    }
    set coins(newCoins: number) {
        this.coins = newCoins;
    }

    get HP(): number {
        return this._HP;
    }
    set HP(newHP: number) {
        this.HP = newHP;
    }

    get height(): number {
        return this._height;
    }
    set height(newHeight: number) {
        this.height = newHeight;
    }

    get lenght(): number {
        return this._lenght;
    }
    set lenght(newLenght: number) {
        this.lenght = newLenght;
    }

    getCoins(): number {
        return this.coins++;
    }
    jump(): void { }
    moveForward(): void { }
    moveBackward(): void { }
    hit(Obstacle): void { }
    touch(Item): void { }
    mushroom(): number {
        return this.HP++;
    }
}