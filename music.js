let myMusic=document.querySelectorAll(".Music")[0];
myMusic.addEventListener("click",function(){
    let myaudio=new Audio("music/Coldplay.mp3");
    myaudio.play();
})