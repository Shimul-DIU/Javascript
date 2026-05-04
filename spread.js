let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1,...arr2]
console.log(arr3)

let obj1={a:1,b:2}
let obj2={c:3,d:4}
let obj3={...obj1,...obj2}
console.log(obj3)

function sum(x,y,z,...args){
    let total=x+y+z
    for(let i=0;i<args.length;i++){
        total+=args[i]
    }
    return total
}
let numbers=[1,2,3]
console.log(sum(...numbers,7,8,9))


let nums={
    name:'shimul',
    roll:'',
    cgpa:''
}
let copy={...nums};
console.log(copy)
