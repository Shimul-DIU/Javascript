const prompt=require('prompt-sync')();
function hieghestRunScore(row,colum){
    let playersInfo=[];
    for (let i=0;i<row;i+=1){
        let singleInfo=[];
        for (let j=0; j<colum;j+=1){
            singleInfo.push(prompt(`Given info [${[i]}][${[j]}]:`));
        }
        playersInfo.push(singleInfo);
    }
    return playersInfo;
}
const row=Number(prompt(`Given row number:`));
const colum=Number(prompt(`Given colum number:`));
ans=hieghestRunScore(row,colum);
console.log(ans)
let maxrun=Number(ans[0][1]);
let max=ans[0][0]
for(let x=1;x<row;x+=1){
    for(let y=0; y<colum;y+=1){
        if(Number(ans[x][y])>maxrun){
            maxrun=Number(ans[x][y]);
            max=ans[x][y-1];
        }
    }
}
console.log(`Maxrun run do is :${max}`);
