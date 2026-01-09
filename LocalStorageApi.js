// local storage set item

localStorage.setItem("name","shimul")
localStorage.setItem("roll",8)
let friends=["mustafa","akram","nime"]
localStorage.setItem("Friends",JSON.stringify(friends))

// local storage get items
let country={
    mycountry:"Bangladesh",
     foregin:"India"
    }
localStorage.setItem("Country",JSON.stringify(country))
console.log(JSON.parse(localStorage.getItem("Country")))


console.log(localStorage.getItem("name"),localStorage.getItem("roll")
)
console.log(JSON.parse(localStorage.getItem("Friends")))

// remove item
localStorage.removeItem("roll")