
// Do not name the function "play()"
function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location = "main.html";
    });
}
