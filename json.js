let obj={name:'shimul',roll:7,cgpa:3.40,isStudent:true}
objToString=JSON.stringify(obj)
console.log(typeof(objToString), objToString)
// ######  convert string to obj ############
stringToObj=JSON.parse(objToString)
console.log(typeof(stringToObj),stringToObj)
