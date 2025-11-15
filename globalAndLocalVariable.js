
let x=4;
var y=5;
const z =6
function Local(){
   let x=8
   y=10
   console.log(`local variable x : ${x}`)
   console.log(`Global variable y : ${y}`)
   if (x%2==0){
    let even =x
    console.log(even)
   }
   //console.log(even) let Block scrope
}
Local()
console.log(`Global variable x: ${x}`)