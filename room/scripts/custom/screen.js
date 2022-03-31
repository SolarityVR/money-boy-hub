var gif_img_index = 0;
var gif_img_array = ["#gif-img1", "#gif-img2", "#gif-img3", "#gif-img4"]
function startGif() {
    document.getElementById("screen_img").setAttribute("src", gif_img_array[gif_img_index]);
    if (gif_img_index < gif_img_array.length - 1)
        gif_img_index++;
    else
        gif_img_index = 0;
}

function start_screen() {
    var intervalId = window.setInterval(function () {
        startGif();
    }, 500);
}