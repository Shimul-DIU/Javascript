let pms=new Promise((resolve,reject)=>{
    let promiseFullfill = false;
    if (promiseFullfill){
        resolve("successful")
    }
    else{
        reject("rejected")
    }
})
pms
.then(err=>{
    console.log(`promise is ${err}`)
})
.catch(res=>{
    console.log(`promiss is ${res}`)
})