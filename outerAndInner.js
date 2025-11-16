outer:for(let i=0;i<5;i++){
    inner:for(let j=0;j<i;j++){
        if(j===2){
            break inner;
        }
        if (i==4){
            break outer;
        }
        console.log(j)
    }
    console.log(end='\n')
}
