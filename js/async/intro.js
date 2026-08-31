// let a=10
// let b=20 

// const start = Date.now();
// console.log(start)

// while (Date.now() - start < 19000) {
//   // Blocking the main thread
// }
// async js code
// callbacks function
// def :-- 
// passing a function to another function as arg is known as callback function

console.log("hello")
// while(){

// } # js interpretrr will stop abruptly

//     function abc(p1,p2){
//     p1()
//     p2()
// }
// abc(function xyz(){
//     console.log("xyz function")
// },function mno(){
//     console.log("mno function")
// })
setTimeout(function (){
    console.log("jscode with  async behavour")
},3000)  // js interpreter will go forward to execute below lines without waiting at setTimeout line


setTimeout(function (){
    console.log("jscode2 with  async behavour")
},5000) 


setTimeout(function (){
    console.log("jscode3 with  async behavour")
},1000)

setTimeout(function (){
    console.log("jscode4 with  async behavour")
},0) 


setInterval(function (){
    alert("wake up its been 5 am in the morning")
},6000)

console.log("bye")

// setTimeout()
// setInterval()
//  let us make our js interpreter go away when it sees some tomer to start executing that code

// console.log("vamsi")
// function login(){
//     console.log("login validation happens shere")
// }
// login()