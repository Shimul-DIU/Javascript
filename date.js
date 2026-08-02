/* let date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getMonth()); */

const date=new Date()

console.log(date.toLocaleDateString())
console.log(date.getDate())
console.log(date.getMonth()+1)

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday'
]
console.log(days[date.getDay()])
// set a date for estimatedDelivary date
console.log(`Order confirm on : ${days[date.getDay()]}`)
console.log(`Product delivery estimatedDays after 4 days on : ${days[date.getDay()+4]}`)


