const buttons=document.querySelectorAll(".btn");
const screen = document.querySelector("#screen");

for (item of buttons){
    item.addEventListener("click",(e)=>{
        btntext=e.target.innerText;
        screen.value+=btntext;
        if (btntext=="C"){
            clearResult();
        }
    });
}
function clearResult(){
    screen.value="";
}
function calculateResult(){
    screen.value=eval(screen.value)
}
function pi(){
    screen.value+=Math.PI;
}
function sin(){
    screen.value=Math.sin(screen.value)
}
function cos(){
    screen.value=Math.cos(screen.value)
}
function tan(){
    screen.value=Math.tan(screen.value)
}
function pow(){
    screen.value=screen.value*screen.value;
}
function cube(){
    screen.value=screen.value*screen.value*screen.value;
}
function sqrt(){
    screen.value=Math.sqrt(screen.value)
}
function log(){
    screen.value=Math.log10(screen.value)
}
