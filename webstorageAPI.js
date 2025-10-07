/* localStorage.setItem("Name","Shimul");
localStorage.setItem("roll","8");
let cars=['bmw','toyota','bugati'];
localStorage.setItem("mycars",JSON.stringify(cars))
let getitem= JSON.parse(localStorage.getItem("mycars"));
console.log(getitem[2]);
console.log(JSON.parse(localStorage.getItem("mycars")));

//===============modify===============
localStorage.setItem("Name","Mustafa")
//====================delete=========== */

/* localStorage.setItem("name","shimul");
localStorage.setItem("roll",6);
console.log(localStorage.getItem("roll"))
console.log(typeof localStorage.getItem("roll")) */
localStorage.setItem("cars",JSON.stringify([4,3,56,'shimul',7]));
let getitem=JSON.parse(localStorage.getItem("cars"))
console.log(getitem[0])