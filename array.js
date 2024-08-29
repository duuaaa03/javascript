// let arr =[2,4,6,8,10,12]
// console.log(arr[5])
// console.log(arr[-1])
// arr[2]=100
// arr[4]=100
// arr[5]=100
// console.log(arr)
// console.log(arr)

// // type of 
// console.log(typeof arr)

// // length 
// console.log(arr.length)

// // string 
// console.log(arr.toString())

// let student_data=["Dua","Ramsha","Iqra"]
// // pop 
// console.log(student_data.pop())
// console.log(student_data)

// // push method 
// console.log(student_data.push("Mahnoor"))
// console.log(student_data)

// // sort 
// console.log(student_data.sort())



// splice or unsplice
// let student_data =['Dua', 'Ramsha', 'Ashar', 'Azan', 'Iqra']
// console.log(student_data.slice(1,2))
// student_data.splice

// // unsplice
// const week =['Monday','Tuesday','Thursday','Friday','Sunday'];
// // week.splice (1,0,"wednesday");
// week.splice(4,0, "saturday");
// console.log(week)


// Function 
// function add_number(){
//     console.log("Add two number",5+5)
//     console.log("Add two number")
// }

// // add_number()
// function sum(a,b){
//     console.log("sum of two number is:" ,a+b)
// }
// sum(5,10)
// sum(34,24)

function full_name(firstname,secondname){
    return firstname+secondname
}
let result =full_name("Dua","Javed")
console.log(result)
if(result==="Dua Javed"){
    console.log("You are selected")
}else{
    console.log("you are not selected")
}
