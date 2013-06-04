var PresentationContent = (function () {
    function PresentationContent() { }
    PresentationContent.Generate = function Generate(slideshow) {
        slideshow.AddSlide("Introduction To TypeScript", "David Kennedy | davidwkennedy@gmail.com | @davidwkennedy | github.com/davidwkennedy");
        slideshow.AddSlide("What TypeScript Is Not", "A replacement or alternative to JavaScript. ");
        slideshow.AddSlide("What TypeScript Is", "TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser.Any host.Any OS.Open Source. ~typescriptlang.org");
        slideshow.AddSlide("Getting Started - Installation", "Visual Studio is not required. Goto TypeScriptLang.org to download the plugin and start compiling from the command line. ");
        slideshow.AddSlide("Demo Time", "Show them demo 1 - compiling from the command line.");
        slideshow.AddSlide("Getting Started - Web Essentials", "Get the most out of TypeScript with Web Essentials extension. Provides support for split-screen editing and compilation on save.");
        slideshow.AddSlide("Demo Time", "Show them demo 2 - compiling in Visual Studio.");
        slideshow.AddSlide("Publishing", "Html files will reference the .js file instead of the .ts file. Publishing from Visual Studio will not copy .ts files to output directory.");
    };
    return PresentationContent;
})();
