class Base {
    constructor(x, y) {
        this.setPosition(x || 0, y || 0);
        this.clearFrames();
        this.frameCount = 0;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    setImage(img, x, y) {
        this.image = {
            path: img,
            x: x,
            y: y
        };
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    getSize() {
        return { width: this.width, height: this.height };
    }
    setupFrames(fps, frames, rewind, id) {
        if (id) {
            if (this.frameID === id)
                return true;
            this.frameID = id;
        }
        this.currentFrame = 0;
        //this.frameTick = frames ? (1000 / fps / setup.interval) : 0;
        this.frames = frames;
        this.rewindFrames = rewind;
        return false;
    }
    clearFrames() {
        this.frameID = undefined;
        this.frames = 0;
        this.currentFrame = 0;
        this.frameTick = 0;
    }
    playFrame() {
        if (this.frameTick && this.view) {
            this.frameCount++;
            if (this.frameCount >= this.frameTick) {
                this.frameCount = 0;
                if (this.currentFrame === this.frames)
                    this.currentFrame = 0;
                var $el = this.view;
                $el.css('background-position', '-' + (this.image.x + this.width * ((this.rewindFrames ? this.frames - 1 : 0) - this.currentFrame)) + 'px -' + this.image.y + 'px');
                this.currentFrame++;
            }
        }
    }
}
;
//# sourceMappingURL=Base.js.map