function Outer(){
    let x=10
    function Inner(outerX){
        x+=outerX
        return x
    }
    return Inner
}
let fn=Outer()
console.log(fn(10))

// another example
function PrintOnce(){
    let count=0
    return function(){
        if (count==0){
            count++
            console.log('print once')
        }
        else{
            
            console.log("undefined")
        }
        
    }
}
let obj=PrintOnce()
obj()
obj()
obj()