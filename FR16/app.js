var car1 = {
    name:'Mazda',
    model:'CX-5',
    year:'2013.',
    month:'August',
} 

var car2 = {
    name:'Bentley',
    model:'Bentayga',
    year:' 2015',
    month:'January'		
  
}
var general ={
    fullName:function(){
        return "fullName"+" " +this.name +" " +this.model
    },
    year:function(){
        var date = new Date().getFullYear()
        return date -this.year
    },
    model: function(){
        return "Model: " + this.model
    }
}
console.log(general.model.call(car2))


class Student{
    setStudentData(name, surname, age, grade, major, groupNo){
        this.name =name;
        this.surname=surname;
        if(age < 5){
            console.log('you are too young for school')
            this.age =age;
        }
        else{
            console.log('welcome to school')
            this.age =age;
        }
        this.grade=grade;
        this.major =major;
        this.groupNo = groupNo


    }
    getStudentFullName(){
        return 'Full Name: ' + this.name +" "+ this.surname
    }
    getStudentGroupNo(){
         
        return "Group No: "+ this.groupNo
    }
}

var student1 = new Student();
student1.setStudentData('Sofiya','Ibrahimova',14,100,'Webdeveloper','P128')
console.log(student1.getStudentFullName())

console.log(student1.getStudentGroupNo())