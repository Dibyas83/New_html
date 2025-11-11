
console.log("Hello World");
var age=65
age=age+1
console.log(age)

var xObject={
    name:"pramod",
    age:55
}
console.log(xObject.age)

function dosomthing(a){
console.log(a+2)//non return type
}
dosomthing(10)
function sumof(a,b){
    return a+b//return type
}
var result=sumof(5,6)
console.log(result)
//json to js object

var xObj='{"name":"Pramod","age":55,"cars":["audi","bmw","ghj"]}';
var parseResponseJS=JSON.parse(xObj)

console.log(parseResponseJS["name"])


//js object to JSON
var jsobject={
    name:"amit",
    age:55
}
var jsonSTR=JSON.stringify(jsobject)
console.log(jsonSTR)

