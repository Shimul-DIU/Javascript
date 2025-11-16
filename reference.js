let a=10
let b =a
a=20
console.log(a)
console.log(b)
// reference type
let ary=[1,2,3]
let ary2=ary
ary[0]=10
console.log(ary)
console.log(ary2)


//object
let obj ={
    'a':1,
    'b':2
}
let obj2=obj
obj.a=10
obj2.name='shimul'
console.log(typeof(obj.name))
console.log(obj)
console.log(obj2)
