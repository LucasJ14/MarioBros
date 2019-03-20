class Goomba extends Enemy {
    _height: number;
    _lenght: number;

    constructor(xPosition: number, yPosition: number, height: number, lenght: number) {
        super(xPosition, yPosition)
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = height;
        this.lenght = lenght;
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
}