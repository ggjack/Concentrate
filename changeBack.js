var rand=Math.random();
window.onload=function setImage(){
if(rand>0.75){
document.body.style.backgroundImage="url('motivation.jpg')";
}else if(rand>0.5){
document.body.style.backgroundImage="url('dgu.jpg')";
}
else if(rand>0.25){
document.body.style.backgroundImage="url('no.jpg')";
}else
{
document.body.style.backgroundImage="url('DoIt.jpg')";
}
document.body.style.backgroundSize= "cover";
}



