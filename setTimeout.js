let num=4
let Setinterval=setInterval(() => {
   console.log(num) 
   num++;
   if (num==11){
    clearInterval(Setinterval)
   }
}, 4000);