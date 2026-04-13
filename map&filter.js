/* let numbers=[1,6,23,54,3,54]
let newarry=[]
numbers.forEach((number)=>{
newarry.push(number*number)
})
console.log(newarry)
 */


// ============== Map =================
/* let numbers=[3,5,3,22,43]
newarry=numbers.map((x)=>{
    return x/2;
})
console.log(newarry) */

// ============ filter =============
let numbers=[3,4,33,55,3]
let newarry=numbers.filter((x)=>{
    if (x>10){
        return x;
    }
})
console.log(newarry)