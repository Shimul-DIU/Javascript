let product=require("./Product_order.json")
let obj={name:'shimul',roll:7,cgpa:3.40,isStudent:true}
objToString=JSON.stringify(obj)
console.log(typeof(objToString), objToString)
// ######  convert string to obj ############
stringToObj=JSON.parse(objToString)
console.log(typeof(stringToObj),stringToObj)
//============== update value================
console.log(product.product_order[1].language[0])
product.product_order[0].items[0].name="mouse"
console.log(product.product_order[0].items[0])
//============== delet key ==============
delete product.product_order[0].address.country
console.log(product)