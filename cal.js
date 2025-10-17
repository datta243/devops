const display=document.getElementById("display");
function append(input){
            display.value+= input;
}
function cle(){
            display.value = "";
}
function cal(){
            display.value = eval(display.value);
}
