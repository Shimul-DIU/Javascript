let prompt=require('prompt-sync')();
let NumofWon=0;
let NumofLos=0
for (let x=0;x<5;x+=1){
    let number=Number(prompt("gessing Number between 1-5 : "));
    let gassingNumber=Math.floor(Math.random()*5+1)
    if (number==gassingNumber){
        console.log('You won');
        NumofWon++;
    }
    else
    {
        console.log(`You loss ,Number was ${gassingNumber}`);
        NumofLos++;
    }
}
console.log(`Number of won :${NumofWon} `);
console.log(`Number of loss :${NumofLos} `);
