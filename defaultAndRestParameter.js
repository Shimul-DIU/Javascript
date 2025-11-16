let num =3
let ary=[1,2,3]
function display(a=1,...b){
    console.log(a)
 
    this.b=b
    console.log(b)
    console.log(typeof(b))
}
let obj1=new display(5,7,9,0,6,'shimul')
let obj2=new display(ary[0],ary[1])
console.log(ary)
console.log(obj1.b)