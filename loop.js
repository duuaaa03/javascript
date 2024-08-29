// table of 3
// let table=3;
// for(i=1;i<=10;i++){
//     console.log(table + "X" +i+ "=" +(table*1));
// }


student_info={
    Name:"Dua javed",
    Age:"21",
    Gender:"female",
    Email: "hahah123@gmail.com",
    Ph:"123-789-543",
}
console.log(student_info)
// for in 
for(const key in student_info ){
    const i= student_info[key];
    console.log(i)
}
for(const key in student_info ){
    console.log(key + ":" +student_info[key])
}
