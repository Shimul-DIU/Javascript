let x=10
function Nochange(val){
    return val=20
}
console.log(Nochange(x))
console.log(x)
// pass by reference ============
let ary=[1,2,3]
console.log(`before ary: ${ary}`)
function Change(x){
    x[0]=10
}
Change(ary)
console.log(`after ary: ${ary}`)