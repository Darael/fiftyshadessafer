function switchColours(){
    var styleCookieName = "palette";
    var styleCookieDuration = 30;
    var curSheet =
            document.getElementById('palette').getAttribute('href');
    var newSheet;
    if (curSheet == "coloursdark.css") {
        newSheet = "colourslight.css";
    } else {
        newSheet = "coloursdark.css";
    }
    document.getElementById('palette').setAttribute('href',newSheet);
}
