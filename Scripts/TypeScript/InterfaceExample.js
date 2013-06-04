var Point = (function () {
    function Point(x, y) {
        this.X = x;
        this.Y = y;
    }
    Point.prototype.getDist = function () {
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    };
    Point.origin = new Point(0, 0);
    return Point;
})();
var p = new Point(3, 4);
var dist = p.getDist();
