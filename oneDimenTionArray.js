let prompt=require('prompt-sync')();
function hieghest(nums){
    let max=nums[0];
    for(let x=1; x<nums.length;x+=1){
        if (max<nums[x]){
            max=nums[x];
           
        }

    }
    return max

}
let array=[]
let Numbers=Number(prompt('Given how many numbers: '));
for(let x=0;x<Numbers;x+=1)
{
    array.push(Number(prompt()));
}
let result=hieghest(array);
console.log(result);