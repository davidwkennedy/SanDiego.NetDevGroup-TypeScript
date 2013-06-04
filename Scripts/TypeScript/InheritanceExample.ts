class rectangle {
    private Height: number;
    private Width: number;

    constructor(height: number, width: number) {
        this.Height = height;
        this.Width = width;
    }

    public getArea(): number {
        return this.Height * this.Width;
    }
}

class square extends rectangle
{
    constructor(size: number)
    {
        super(size, size);
    }
}