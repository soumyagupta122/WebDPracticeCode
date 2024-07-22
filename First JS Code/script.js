// console.log("This is me Soumya!!");
// console.log("This shit is working omggggggg !!");

// //  Var variable--  globally scoped

// var a = 60;
// console.log(a);

// //  via fuction  fuctionally scoped

// function sum(){
//     var x = 10;
//     var y = 30;
//     console.log(x+y);
// }

// sum();
// //  console.log(x+y);    //its not possible because it is out of the fuction only works inside the fuction.

// // let variable ---- blocked scoped

// let b = 9;
// console.log(b);

// {
//     let c = 10;          its not working bcoz its inside the block and console is outside the block and let is block scoped variable. 
// }
// console.log(c);                         


// let marks = 300;
// console.log("student marks is = " + marks);
// // console.log(marks);

// let marks;
// console.log(marks);

//  Arithemetic operator (Binary)

// let num1 = 2;
// let num2 = 3;

// console.log(num1**num2);

// Ternary Operator 

// let age = prompt("Enter your age ?");

// let age = 2;
// let status1 = (age>18) ? "I can vote." : "I can not vote.";

// console.log(status1);

// let cond = ("soumya" ||true || 3);
// console.log(cond);

// for loop --

// const n = prompt();
// // prompt();
// for(let i=5; i>=1; i--){
//     console.log(i);
// }

// break and continue

// for (let i=1; i<=10; i++){
//     if (i == 4) {
//     //    console.log("four"); 
//     // break;
//     continue;
//     }
//     else{
//         console.log(i); 
//     }
// }

// let i=1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// let name = `My 
// Name 
// is 
// Soumya
// Gupta`
// console.log(name);

// let sentence = "ram, shyam , shanu , \"preeti \" ";
// console.log(sentence);

// let sentence = " ram , shyam , shanu , preeti ";
// console.log(sentence);
// let word = sentence.split(",");
// console.log(word);
// let form = word.join("+");
// console.log(form);

// function sum(a,b) {
//     console.log( "sum is =",a+b);
// }

// sum(2,5);

// function getSum(a,b,c) {
//     let Sum = (a+b+c);
//     return Sum;
// }

// let ans = getSum(1,2,3);
// console.log(ans);
// console.log(ans + 4);

// function getMyName(firstName , lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }

// let MyName = getMyName("Soumya" , "Gupta");
// console.log(MyName);

//Map Function -- 

// let arr = [10,20,30];
// let ansArr = arr.map((number) =>{
//     return number*number;
// })

// console.log(ansArr);


// let arr = [12 , 15, 98, 109, 34, 89, 3, 2, 98, 33];
// let evenArray = arr.filter((number) =>{
//     return number%2 != 0;
// })
// console.log(evenArray);

// reduce function

// let arr = [10, 20, 30, 40];
// let sumOfArray = arr.reduce((acc, curr) => {
//     return acc+curr;
// } ,0)

// console.log(sumOfArray);

// let arr = [2,5,1,9,3,6,4,0];
// arr.sort();
// arr.reverse();
// console.log(arr);

// let arr = [2,5,1,9,3,6,4,0];
// let element = arr.find((number) => {
//     return number>6 ;
// });
// console.log(element);

// let a = 987;
// b = a/10;
// console.log(a);
// console.log(b);





