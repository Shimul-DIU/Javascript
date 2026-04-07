let text='never give up keep working give'
let newtext=text.replace(/give/ig,'given')
let pera=document.querySelector('p')
let heading=document.querySelector('h1')
// pera.innerHTML=newtext
// ans.innerHTML=newtext.search(/gi/ig)

let arr=['shimul',4,true,false,null ,3.44]
let str=arr.join(" ")
// heading.innerHTML=str.match(/shi/ig)
let str2='this is text sf 5900'
// heading.innerHTML=str2.match(/sf|is|sh/ig)/
// heading.innerHTML=str2.match(/\d/g)

console.log(typeof(str2.match(/\d/g)))
function CheckEmail(event){
    event.preventDefault()
    let value=document.querySelector('input[type=email]').value
    let pera=document.createElement('p')
    let div=document.querySelector('.result')
    pera.innerText=value
    div.appendChild(pera)
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;   if (pattern.test(value)){
        heading.innerText='welcome'
   }
   else{
    heading.innerText='not a valid email'
   }
}

