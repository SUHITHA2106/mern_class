s"use strict";
console.log("Hello World");
console.warn("warning");
console.error("error");
console.table([{name:"Alice",age:"20"},{name:"Bob",age:"21"}])

//evaluate console in string
eval("let a=5;console.log(\"Hello World\");console.log(a);");

//STRICT will throw error in the code 
let x=3.14;
console.log(x);

//JSON JavaScript Object Notation 
let obj = {name:"John"};
let str = JSON.stringify(obj);
console.log(str);
let back=JSON.parse(str);
console.log(back);

//Local Storage
localStorage.setItem("username","Siva");
console.log(localStorage.getItem("username"))

//Session Storage
sessionStorage.setItem("firstname","John");
sessionStorage.setItem("age","20");
console.log(sessionStorage.getItem("firstname"));

//Promise
let promise=new Promise((resolve)=>{
    let=true;
    setTimeout(()=>{resolve("hello")},10000);
});
promise.then(res=>console.log(res)).catch(err=>console.log(err));

function outer(){
    let name="JS"
    return function inner(){
        console.log(name);
    }
}

//DOM
let x = document.getElementById("DOM");
let body = document.querySelector("div");
x.style.color = "black";
x.innerText = "welcome my webpage!";

let newelement = document.createElement("h1");
newelement.innerText = "Hi Suhi!";
x.appendChild(newelement);
setTimeout(() => {
    x.removeChild(newelement);    
},10000);

//event listener
let obj = document.getElementById("DOM");
obj.addEventListener("click", () => {
    let head_obj = document.getElementById("head");
    console.log(head_obj);
    head_obj.style.color = "purple";
    head_obj.innerText = "clicked";});