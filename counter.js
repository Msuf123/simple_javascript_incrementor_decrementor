let button=document.getElementsByClassName('buttons');
let text=document.getElementById("number");
let b=0;
let c=0;
button[0].addEventListener('click',dec)
button[1].addEventListener('click',reset)
button[2].addEventListener('click',inc)
function dec(){

let e=c-1;
c=e;
text.innerHTML=c;
}
function reset(){
c=0;
text.innerHTML=b;
}
function inc(){
let e=c+1;
c=e;
text.innerHTML=c;
console.log(c)
}


