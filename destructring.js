//  array destructrring ......
let nums=[1,2,34,5,6,7,5]
let [num1,num2,num3,...num4]=nums
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
// swap value
// let num5=2
// let num6=4
// ([num5,num6]=[num6,num5])
// console.log(num5)
//object destructring
let studentInfo={
    id:1,
    name:"shimul",
    roll:8,
    cgpa:3.57,
    obj:{
        name:'akram',
        born:'jamalpur'
    }
}
console.log(studentInfo.id)
let {id,name,roll,cgpa,obj}=studentInfo
console.log(obj.name)
// destructring function perameter
let person=({name,roll,age})=>{
    console.log(`name is : ${name} age ${age} roll is ${roll}`)
}
let obj4={
    name:'shimul',
    roll:6,
    age:54
}
person(obj4)
