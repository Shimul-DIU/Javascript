let form =document.getElementById("form");
let name=form.children[1]
let email=form.children[4]
let car=document.getElementById("car");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let object={
        Name:name.value,
        Email:email.value,
        Car:car.value
    }
    console.log(object);
})
let nums=[9,0,8]
nums.forEach()