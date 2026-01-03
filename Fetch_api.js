function Fakeapi(){
    let url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(response=>response.json())
    .then(data=>
    {
        let div=document.getElementById('div')
        for(let people of data){
           let pera= document.createElement('p')
           pera.innerHTML=` name is : ${people.name} `
           div.appendChild(pera)
        }
    }
    )
}