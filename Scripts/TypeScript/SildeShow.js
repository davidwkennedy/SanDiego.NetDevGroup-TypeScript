var SlideShow = (function () {
    function SlideShow() {
        this.Slides = [];
    }
    SlideShow.prototype.BeginSlideShow = function () {
        this.CurrentSlideIndex = 0;
        this.AttachKeyPressEventListeners();
        if(this.Slides.length > 0) {
            $("#Title").text(this.Slides[0].Title);
            $("#Description").text(this.Slides[0].Description);
        }
    };
    SlideShow.prototype.AddSlide = function (title, description) {
        this.Slides.push(new Slide(title, description));
    };
    SlideShow.prototype.AdvanceSlideShow = function () {
        if(this.CurrentSlideIndex < this.Slides.length - 1) {
            this.CurrentSlideIndex++;
        } else {
            this.CurrentSlideIndex = 0;
        }
        this.TransitionSlideShow();
    };
    SlideShow.prototype.RegressSlideShow = function () {
        if(this.CurrentSlideIndex > 0) {
            this.CurrentSlideIndex--;
        } else {
            this.CurrentSlideIndex = this.Slides.length - 1;
        }
        this.TransitionSlideShow();
    };
    SlideShow.prototype.TransitionSlideShow = function () {
        var show = this;
        $("#SlideShowContainer").fadeOut(250, function () {
            $("#Title").text(show.Slides[show.CurrentSlideIndex].Title);
            $("#Description").text(show.Slides[show.CurrentSlideIndex].Description);
            $("#SlideShowContainer").fadeIn();
        });
    };
    SlideShow.prototype.AttachKeyPressEventListeners = function () {
        var show = this;
        $(document).keydown(function (event) {
            if(event.keyCode == 39) {
                show.AdvanceSlideShow();
            }
            if(event.keyCode == 37) {
                show.RegressSlideShow();
            }
        });
    };
    return SlideShow;
})();
