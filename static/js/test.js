console.log("hello World")
let student_name = "Raga"
console.log("student name is:" + student_name)
let student_age = 21
let course_name = "Python Full Stack"
console.log("student age is:" +
    student_age, "course name is:" + course_name)
let fee = 100000
let discount = 10
let discounted_fee = fee - (fee * discount / 100)
console.log("Discounted fee is:" + discounted_fee)
let age = 18
if (age >= 18) {
    console.log("Eigible for admission")
}
else {
    console > log("Not eligible for admission")
}

for (let i = 1; i <= 5; i++) {
    console.log("Iteration number:" + i)
}
const pi = 3.14
console.log("value of pi is:+pi")
let student = {
    name: "devi",
    age: 20,
    course: "python full stack",
    fee: 10000
}
console.log("Student details:", student)
function greetStudent(name) {
    console.log("Hello" + name + ",welcome to NRiit Learning Management System")
}
greetStudent(student_name)
// write a function to square a number
function squareNumber(num) {
    return num*num
}
x = squareNumber(5)
console.log("square of 5 is:",x)
//write function to odd or even number
function oddOrEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else{
        return "odd";
    }
}
console.log("check if 7 is odd or even:",checkeddeven(7));
