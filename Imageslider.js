let arr=["Images/rif.jpg","Images/rifat.jpg","Images/riyan.jpg","Images/shimul.jpg"]
let i=0;
let p=document.getElementById("pre")
let im=document.getElementById("Img")
let n=document.getElementById("nxt")
function Prev(){
    --i;
    if (i==-1){
        alert("first image")
    }
    im.src=arr[i];
    
}
function nex(){
    ++i;
    if (i==arr.length){
        alert("no more")
    }
    im.src=arr[i];
    
}