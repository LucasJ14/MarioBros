class Gauge extends Base {
    constructor(id, startImgX, startImgY, fps, frames, rewind) {
        super(0, 0);
        this.view = $('#' + id);
        this.setSize(this.view.width(), this.view.height());
        this.setImage(this.view.css('background-image'), startImgX, startImgY);
        this.setupFrames(fps, frames, rewind);
    }
}
;
//# sourceMappingURL=TypeScript1.js.map