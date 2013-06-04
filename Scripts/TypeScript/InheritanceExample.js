var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var rectangle = (function () {
    function rectangle(height, width) {
        this.Height = height;
        this.Width = width;
    }
    rectangle.prototype.getArea = function () {
        return this.Height * this.Width;
    };
    return rectangle;
})();
var square = (function (_super) {
    __extends(square, _super);
    function square(size) {
        _super.call(this, size, size);
    }
    return square;
})(rectangle);
