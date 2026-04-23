/* setTimeout(() => {
    console.log('i am wep api')
}, 2000);
console.log('tast 1')
console.log('tast 2')

// asyne to sync

function outer(callback){
    setTimeout(()=>{
        console.log('web api')
        callback();
    },4000)
}
function callLater(){
    console.log('task 1')
    console.log('task 2')

}

outer(callLater) */

function First(num1,num2,callback){

    setTimeout(()=>{
         console.log('i am first function')
            console.log(num1+num2);
             callback();
             console.log(new Date().getMonth());
    },5000)

}
function Second(){
    console.log('i am second function')
}
First(2,3,Second)