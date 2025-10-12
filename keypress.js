let sp=document.querySelector("span");
document.addEventListener("keypress",function(event){
    let text=event.key;
    sp.innerHTML="You press "+text;
})