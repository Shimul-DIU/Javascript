let array=[7,5,3,9];
// ============= push element================
array.push(5);
array.push(6);
//array.unshift(0)
console.log(array);

//============== delete element============
array.pop();
console.log(array);
array.shift();
console.log(array);
//==============splice==================
console.log('Before Splice array=>',array);
array.splice(1,2);
console.log('after detele 2 element array=>',array);
array.unshift(1);
array.splice(2,0,3,4);
console.log(array)
//============== slice================
let sliceNum=array.slice(2,3);
console.log(array);
console.log(sliceNum);
//================ sorting=================
array.sort(function(a,b){
    return b-a;
})
console.log(array)
let str=['shimul','mustafa ','rifat','riyan']
str.sort()
console.log(str)
str.reverse()
console.log(str)