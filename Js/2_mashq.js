
var salaries = {
	"Akmal": {
        salary:1200},
	"Salim":{
        salary:5200}, 
	"Karima":{
        salary: 1800}
}


function sumSalary(object) {
    var s = 0;
    for (var key in object) {
        s += object[key].salary;
    }
    return s;
}

console.log(sumSalary(salaries));