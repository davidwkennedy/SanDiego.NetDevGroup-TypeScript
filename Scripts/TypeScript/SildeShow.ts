/// <reference path="../jQuery/jquery.d.ts" />
/// <reference path="./Slide.ts" />

class SlideShow {
    
    private CurrentSlideIndex: number;
    private Slides: Slide[] = [];
        
    public BeginSlideShow() {
        this.CurrentSlideIndex = 0;      
        this.AttachKeyPressEventListeners();

        if (this.Slides.length > 0) {
            $("#Title").text(this.Slides[0].Title);
            $("#Description").text(this.Slides[0].Description);
        }
    }

    public AddSlide(title: string, description: string)
    {
        this.Slides.push(new Slide(title, description));
    }

    public AdvanceSlideShow()
    {
        if (this.CurrentSlideIndex < this.Slides.length - 1)
            this.CurrentSlideIndex++
        else
            this.CurrentSlideIndex = 0;

        this.TransitionSlideShow();
    }

    public RegressSlideShow()
    {
        if (this.CurrentSlideIndex > 0)
            this.CurrentSlideIndex--;
        else
            this.CurrentSlideIndex = this.Slides.length - 1;
        this.TransitionSlideShow();
    }

    private TransitionSlideShow()
    {
        var show = this;
        $("#SlideShowContainer").fadeOut(250, function () {
            $("#Title").text(show.Slides[show.CurrentSlideIndex].Title);
            $("#Description").text(show.Slides[show.CurrentSlideIndex].Description);
            $("#SlideShowContainer").fadeIn();
        });

        
    }

    private AttachKeyPressEventListeners()
    {
        var show = this;
        $(document).keydown(function (event) {
            if (event.keyCode == 39) { show.AdvanceSlideShow(); }        // Right Arrow Key
            if (event.keyCode == 37) { show.RegressSlideShow(); }        // Left Arrow Key
        });
    }
}