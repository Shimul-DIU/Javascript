/* let Students=function info(information){
    console.log(information)
}
let Students4={
    name:'shimul',
    roll:8,
    country:'bangladesh'
}
Students(Students4.name);
 */
/* function info(){
    let y=7;
    console.log(y);
    return y;
}
let x=console.log();
console.log(x) */
function add(price1, price2) {
const total = price1 + price2;
return total;
}
const bill = add(5, 80);
console.log(bill);

function info(){
    let y=7;
    console.log(y);
    return y;
}
let x=info();
console.log(x)
let numbers=[2,4,5,3,4]
for (let number of numbers){
    console.log(number)
}
// ===============IIFE==========
(x=>{
    x+1
    console.log('hello')
})()
// ============callback function=============
let FunctionExpresion=function Myfunction(x,y,callback){
    let sum=x+y
    callback(sum)
}
function callafter(result){
    console.log(`result is :${result}`)
}
FunctionExpresion(2,3,callafter)
// =============== Heiger order functions=========
function outer(x,y,inputfuncton){
    inputfuncton(x,y)
}
function inner1(a,b){
    console.log('first function of sum is :',a+b)
}
function inner2(c,d){
    console.log('second function of sum is :',c*d)
}
outer(2,5,inner1)
outer(2,5,inner2)