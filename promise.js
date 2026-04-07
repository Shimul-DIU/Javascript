let promise1=new Promise((resolve,reject)=>{
    let promiseFullfill = true;
    if (promiseFullfill){
       setTimeout(()=>{
         resolve("successful")
       },2000)
    }
    else{
        reject(new Error("rejected"))
    }
});
promise1
.then(res=>{
    console.log(`promise is ${res}`)
})
.catch(err=>{
    console.log(`promiss is ${err.message}`)
})

// promise 2 
let meet=new Promise((resolve,reject)=>{
    let completed=true;
    
    if(completed){
        setTimeout(()=>{
            resolve('promise accepted')
        },1000)
    }
    else
    {
        reject('rejected')
    }
   
});
 console.log(meet)
meet
.then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.log(rej)
})
/* Promise.all([promise1,meet])
.then(([res1,res2])=>{
    console.log(res1,res2)
})
.catch((err)=>{
    console.log(err)
}) */
Promise.race([promise1,meet])
.then((res)=>{
    console.log(res)
})
let date=new Date();
console.log(date.getDate())