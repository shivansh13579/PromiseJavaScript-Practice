const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
       console.log('Async task is completed');
       resolve();

    },1000)
})
promiseOne.then(function(){
    console.log("promise is completed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000)
}).then(function(){
    console.log("Async 2 Completed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({UserName: "shivam",Email : "shivansh0975@gmail.com",Age : 20})
    },1000)
})

promiseThree.then(function(user){
     console.log(user);
})
