function switchtheme() {
    currentimg = document.getElementById("themeimg").src;
    concatimg = currentimg.substring(22,29);
    console.log(concatimg);
    var element = document.body;
    element.classList.toggle("dark-mode")
    if (concatimg == "lmi.png") {
        document.getElementById("themeimg").src="dmi.svg";
    }
    else if (concatimg == "dmi.svg") {
        document.getElementById("themeimg").src="lmi.png";
    }
}
