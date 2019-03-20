class Obstacle {
    _xPosition: number;
    _yPosition: number;
    _height: number;
    _lenght: number;
    _name: string;

    constructor(xPosition: number, yPosition: number, height: number, lenght: number, name: string) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = height;
        this.lenght = lenght;
        this.name = name;
    }

    getTouched(): void {
    }

    get xPostion(): number {
        return this._xPosition;
    }
    set xPosition(newXPosition:number) {
        this.xPosition = newXPosition;
    }

    get yPosition(): number {
        return this._yPosition;
    }
    set yPosition(newYPosition: number) {
        this.yPosition = newYPosition;
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

    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this.name = newName;
    }
}
