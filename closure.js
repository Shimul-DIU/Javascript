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