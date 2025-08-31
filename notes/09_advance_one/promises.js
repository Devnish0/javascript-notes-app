const promiseOne = new Promise((resolve, reject)=>{
//     ! do an async task
//     ! Db calls, cryptography, network
       setTimeout(()={
           console.log('async task is completed')
       },1000)

})