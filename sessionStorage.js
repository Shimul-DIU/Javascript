sessionStorage.setItem("name","shimul")
let countries=["Bangladesh","India","Nepal"]
sessionStorage.setItem("countryName",JSON.stringify(countries))
let cname=JSON.parse(sessionStorage.getItem("countryName"))
let div=document.createElement('div')

cname.forEach(element => {
    let pera=document.createElement('p')
    pera.innerHTML=element
    div.appendChild(pera)
    document.body.appendChild(div)
});


sessionStorage.setItem("roll","6")
sessionStorage.removeItem("roll")
sessionStorage.clear()