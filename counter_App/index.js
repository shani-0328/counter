const decBtn=document.getElementById("decBtn");
const resetBtn=document.getElementById("resetBtn");
const incBtn=document.getElementById("incBtn");
const countLbl=document.getElementById("countLable");
let count=0;

decBtn.onclick=function(){
    count--;
    countLbl.textContent=count;

}
incBtn.onclick=function(){
    count++;
    countLbl.textContent=count;

}
resetBtn.onclick=function(){
    count=0;
    countLbl.textContent=count;

}


