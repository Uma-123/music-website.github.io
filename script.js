var mysong = document.getElementById("Mysong")
var icon = document.getElementById("icon")

icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "media/pause.svg"
    }
    else{
        mysong.pause();
        icon.src = "media/play.svg"
    }
}