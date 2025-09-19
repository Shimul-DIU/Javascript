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
        console.log(this.friends);
    }
}
let students=new Information('shimul',5,5.55,'ehiwer','sfldf');
let student3=new Information('mustafa',5,5.55,'ehiwer','sfldf');
let student2=new Information('rifat',5,5.55,'ehiwer','sfldf');
student2.display();
student3.display();
students.display();