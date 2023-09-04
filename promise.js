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

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "shivam",Password : '123'})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
      console.log(user);
      return user.username;
}).then((username)=>{
       console.log(username);
}).catch(function(error){
     console.log(error);
}).finally(()=>console.log("The Promise is either resolve or reject"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript",Password:'123'})
        }else{
            reject("ERROR : JS went wrong")
        }
    },1000)
});

async function consumepromiseFive(){
    try {
    const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive();
