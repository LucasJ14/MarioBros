class Enemy {
    _xPosition: number;
    _yPosition: number;

    constructor(xPosition: number, yPosition: number) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
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

    moveForward(): void { }
    moveBackward(): void { }
    touch(Mario): number {
        return Mario
    }
}