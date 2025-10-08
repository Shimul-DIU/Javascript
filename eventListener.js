let heding=document.querySelector("h4")
 let text=heding.innerText;
heding.addEventListener("mouseover",function(){
    heding.innerHTML="hello mr"
})

heding.addEventListener("mouseout",function(){
   
    heding.innerHTML=text;
})