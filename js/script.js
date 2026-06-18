const musik = document.getElementById("musik");
const btn = document.getElementById("btnMusic");

function toggleMusic(){
if(musik.paused){
musik.play();
btn.innerHTML="⏸";
}else{
musik.pause();
btn.innerHTML="🎵";
}
}