// Interface
interface IPoint {
    getDist(): number;
    
}

// Class
class Point implements IPoint {
    public X: number;
    public Y: number;

    // Constructor
    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    // Instance member
    getDist() { return Math.sqrt(this.X * this.X + this.Y * this.Y); }

    

    // Static member
    static origin = new Point(0, 0);
}

// Local variables
var p: IPoint = new Point(3, 4);
var dist = p.getDist();

















//getAngle(): number;
//getAngle() { return Math.asin(this.Y / Math.sin(this.getDist())); }