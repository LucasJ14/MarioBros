class CoinsBlock extends Block {
    _item: Item;

    constructor(xPosition: number, yPosition: number, height: number, lenght: number, item: Item) {
        super(xPosition, yPosition, height, lenght);
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = height;
        this.lenght = lenght;
        this.item = item;
    }

    get item(): Item {
        return this._item;
    }
    set item(newItem: Item) {
        this.item = newItem;
    }

    Touched(): Item {
        return this.item;
    }
}