class Slide {
    public Title: string;
    public Description: string;
    private xyz: string;

    constructor(title: string, description: string)
    {
        this.Title = title;
        this.Description = description;
        this.xyz = title + description;
        
    }

}


