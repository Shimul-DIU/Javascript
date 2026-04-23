let err=new Error();
// console.log(err);
//======ReferenceError========
// console.log(x);
// console.log(err.stack);
 console.log(err.message);
// console.log(err.name);


// syntax error
// console.log('hello world)

// type error
let num=5;
console.log(num.toUpperCase());
// range error
let arry=new Array(-1);
console.log(arry);

function checkNumber(event){
  event.preventDefault();
  let number=document.getElementById('number').value;
  try {
    if(number<1 || number>10){
      throw new Error('number must be between 1 and 10');
    }
    console.log('your number is valid');

  } catch (error) {
    console.log(error.message);

  }
}
