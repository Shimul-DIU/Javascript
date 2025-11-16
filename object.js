function Information(name,roll,cgpa,countru,friends){
    this.name=name;
    this.roll=roll;
    this.cgpa=cgpa;
    this.country=countru;
    this.Friends=friends;
    this.display=function(){
        console.log(this.name);
        console.log(this.roll);
        console.log(this.cgpa);
        console.log(this.country);
        console.log(this.Friends);
    }
}
let students=new Information('shimul',5,5.55,'ehiwer','sfldf');
let student3=new Information('mustafa',5,5.55,'ehiwer','sfldf');
let student2=new Information('rifat',5,5.55,'ehiwer','sfldf');

student2.display();
student3.display();
students.display();


//================Object=============
let obj={
    num1:4,
    num2:5,
    arry:['shimul',8,'mustafa',0.9454]
}
obj.num1=5//change value
obj.name='rifa'
console.log(obj)

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false (সবসময় ইউনিক)
