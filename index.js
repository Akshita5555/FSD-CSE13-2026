// var a = 23;
// if(a>10){
//     let a =45;
//     console.log("value of a inside block of if is: "+a);
// }
// console.log("value of a outside block of if is"+a);
// function sum(a,b){
//     return a+b;
// }
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,400));
// }
// sumofsum();
// function info(rollNumber,name,age){
//     return "rollNumber="+rollNumber+" Name="+name+" Age="+age;
// }
// function myInfo(){
//     console.log("My Information");
//     const info1=myInfo();
//     console.log("My friends information");
//     const Info2=myInfo();
// }
//  function generateNumber(){
//     return Math.floor(Math.random()*1000);
// }
// const randomNumber=generateNumber();

// function findEvenNumber(number){

// }
// console.log(randomNumber)
// const sum=(a,b)=>{
//     return a+b;

// }
// const result=sum(20,50);
// function sum(a, b) {
//     return a + b;
// }
// function  sumWithMsg(clbk, msg) {
//      const result = clbk(20, 40);
//      return  msg + result;
// }
// sumWithMsg(sum,"Hii....Sum");
// setTimeout(()=>{
//     console.log("One");
//     setTimeout(()=>{
//         console.log("Two");
//         setTimeout(()=>{
//         console.log("Three");
//         setTimeout(()=>{
//         console.log("Four");
//         setTimeout(()=>{
//         console.log("Five");
//         setTimeout(()=>{
//         console.log("Six");
//         setTimeout(()=>{
//         console.log("Seven");
//         setTimeout(()=>{
//         console.log("Eight");
//     },1000);
//         },1000);
// },1000);
//         },1000);
//     },1000);
// },1000);
//     },1000);
// },1000);
// console.log("One")
// console.log("Two")
// console.log("Three")
// function sumofsqrt(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
//  }
// console.log(sumofsqrt(25,36));
// function myname(){
//     return "Aashi";
// }
// console.log(myname() +" "+ sumofsqrt(4,3));



//promise in js

//const myPromise=new Promise((resolve,reject)=>{
    //let use4rname="Aashi";
    //let Password="123";
    //if(username=="Aashi"&& password=="123"){
        
// console.log("hiii")
// let a=23;
// console.log("a="+a);
const container = document.getElementById("container");

console.log(container);

const button = document.getElementById("btn");
console.log(button);

const h2 = document.getElementById("data");
const loader = document.getElementById("loader");

async function fetchData() {
    try {
        loader.innerHTML = "Fetching data..";

        const serverData = await fetch("https://fakestoreapi.com/products");

        const JSONData = await serverData.json();

        let table = `<table border="1">
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
            </tr>

            ${
                JSONData.map((ele) => `
                    <tr>
                        <td>
                            <img src="${ele.image}" height="200px" width="200px">
                        </td>

                        <td>${ele.title}</td>

                        <td>${ele.price}</td>

                        <td>${ele.description}</td>
                    </tr>
                `).join("")
            }

        </table>`;

        container.innerHTML = table;

    } catch (e) {
        console.log("Error is: " + e);

        loader.innerHTML = "Error is: " + e;

    } finally {
        loader.innerHTML = "";
    }
}

button.addEventListener("click", fetchData);