var japoncar ={
    name:'Mazda',
    country:'Japon'

}
var germancar = {
    name: 'BMW',
    country:'Germany'
}
var general ={
    general:function(){
        return "Car Name:" + this.name +"/ Country: "+ this.country
    }
}
console.log(general.general.call(japoncar))
console.log(general.general.call(germancar))

 