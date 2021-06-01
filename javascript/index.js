
function getJunk() {
    let dogeImage = document.getElementById("doge-image");
    if (dogeImage.style.opacity === "0") {
        dogeImage.style.opacity = "1";
    } else {
        dogeImage.style.opacity = "0";
    }
}