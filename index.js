class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width is not valid!")
        }
    }
    
    set height(newHeight) {
        if (typeof newHeight === "number" && newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height is not valid!")
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._height * this._width
    }
}

const rectangle = new Rectangle(100, 200);

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)