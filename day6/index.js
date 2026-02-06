/**
 What is an API
 API ia a set of rules and protocols taht allow two different software systems to communicate
 examples of API type
 1. POSIX()
 2. REST 
 3. SOAP
 4. GraphQL
 5. gRPC

 what is REST
 REST is an architectural style, not a framework.
 it defines how clients and servers should communicate over http.
 
 */

//  const another=(cb)=>{
//     console.log("inside another");
//     setTimeout(()=>{
//         console.log("timeout")
//         cb()
//     }, 2000)    
//  }

//  const main=()=>{
//     console.log("start");
//     another(()=>{
//         console.log("end")
//     })
    
//  }

//  main()

//hume ek baar jyada baar callback ko call kyo nhi krna chahiye


//1. dupliacte api response
//2. Double db writes
//3. Memory leaks
//4. unexpected state changes

// const another=(cb)=>{
//     console.log("inside another");
//     setTimeout(()=>{
//         console.log("inside timeout");
//         cb()
//         cb()// callback is something like a return value and we don't retur data multiple times(problem with callbacks)
       
        
//     }, 2000)    
// }

// const main=()=>{
//     console.log('start');
//     another(()=>{
//         console.log("end");        
//     })    
// }

// main()

// //how to prevent calling callback twice
// const another=(cb)=>{
//     console.log("inside another");
//     let called=false;
//     setTimeout(()=>{
//         if(!called){
//             console.log("inside timeout");
//             cb()
//             called=true            
//         }

//     },2000)
// }

// const main = () => {
//     console.log("start");
//     another(() => console.log("end"));
// };
// main();


// //problem with callback
// const another=(cb)=>{
//     console.log("inside another");
//     setTimeout(()=>{
//         console.log("inside timeout");
//         cb()
//         cb()
//     }, 2000)    
// }

// const main=()=>{
//     console.log("start");
//     another(()=>{
//         console.log("end");        
//     })    
// }

// main()


// // convert the above code into promises
// const another=()=>{
//     console.log('inside another');
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log('inside timeout');
//             res("done")
//         },2000)
//     })
// }
// const main=()=>{
//     console.log('start');
//     another().then(()=>{
//         console.log('end');        
//     })
// }
// main()

//example 1

// main ek kam karunga jab khatam ho jaye to kisi aur ko bta dena
// const another=(cb)=>{ // step1. callback htao
//     console.log("inside another");
//     setTimeout(() => {// step2. promise return krao
//         console.log('inside timeout');  
//         cb()// step3. jahan callback hota tha wha resolve      
//     }, 2000);    
// }

// const main=()=>{
//     console.log('start');
//     another(()=>{
//         console.log('end');        
//     })
// }

// main()
/**
 step1. callback htao
 step2. promise return krao
 step3. callback ki jagah resolve 
 */

//  const another=()=>{
//     console.log('inside another');
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log('inside timeout');
//         resolve("done")       
//     }, 2000)  
//     })  
//  }

//  const main=()=>{
//     console.log(start);
//     // another(()=>{
//     //     console.log(end);        
//     // })    
//     another().then(()=>{
//         console.log('end');
        
//     })
//  }

//  const main= async()=>{
//     console.log('start');
//     await another()
//     console.log('end');    
//  }
//  main()


//example 2
// //callback mode
// const getUser=(cb)=>{
//     console.log('fetching user');
//     setTimeout(()=>{
//         const user={id:1, name:"kullu"}
//         cb(user)
//     },2000)    
// }

// const main=()=>{
//     console.log('start');
//     getUser((user)=>{
//         console.log('user recieved', user.name);        
//     })
//     console.log('end');
    
// }

// main()


//step1. callback remove
//step2. return new Promise((res, rej)=>{})
//step3. repalce callback with resolve

// const getUser=()=>{
//     console.log('fetching data');
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//         const user={id:1, name:"Kullu"}
//         resolve(user)
//     }, 2000) 
//     })   
// }

// const main=()=>{
//     console.log('start');
//     getUser().then((user)=>{
//         console.log("User received:", user.name);        
//     })
//     // getUser()  
//     console.log("end");      
// }

// main()

// const main=async()=>{
//     console.log('start');
//     const user= await getUser()
//     console.log('user recieved', user.name);
//     console.log('end');    
// }

//main()


//example 3

// const getUser=(cb)=>{
//     setTimeout(()=>{
//         cb({id:1, name:"ana"})
//     },2000)
// }

// const getOrders=(userId, cb)=>{
//     setTimeout(()=>{
//         cb(['order1', 'order2'])
//     },2000)
// }

// const getOrderDetails=(orderId, cb)=>{
//     setTimeout(()=>{
//         cb({orderId, price:999})
//     }, 2000)
// }

// getUser((user)=>{
//     getOrders(user.id, (orders)=>{
//         getOrderDetails(orders[0],(details)=>{
//             console.log("final result", details);            
//         })
//     })
// })

// //promises
// const getUser=()=>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve({id:1, name:"ana crystal"})
//         },2000)
//     })
// }

// const getOrders=(userId)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(["order1", "order2"])
//         },2000)
//     })
// }

// const getOrderDetails=(orderId)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({orderId, price:999})
//         }, 2000)
//     })
// }

// // getUser()
// //   .then((user) => getOrders(user.id))
// //   .then((orders) => getOrderDetails(orders[0]))
// //   .then((details) => console.log("Final Result:", details))
// //   .catch((err) => console.log(err));


// // async await

// const main = async () => {
//   try {
//     const user = await getUser();
//     const orders = await getOrders(user.id);
//     const details = await getOrderDetails(orders[0]);

//     console.log("Final Result:", details);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// };

// main();

//file download flow
//callback
// const downloadFile=(cb)=>{
//     console.log("downloading file...");
//     setTimeout(()=>{
//         console.log('Download complete');
//         cb("file-data")        
//     },2000)    
// }

// const saveFile=(file, cb)=>{
//     console.log('saving file...');
//     setTimeout(()=>{
//          console.log('file saved');
//          cb()         
//     }, 2000)
// }

// downloadFile((file)=>{
//     saveFile(file, ()=>{
//         console.log("all done");        
//     })
// })

//promises
const downloadFile=()=>{
    console.log("downloading file...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log('Download complete');
        resolve("file-data")        
    },2000)
    })    
}

const saveFile=(file)=>{
    console.log('saving file...');
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
         console.log('file saved');
         resolve()         
    }, 2000)
    })
}

const main=async()=>{
    const file=await downloadFile()
    await saveFile(file)
    console.log('all done');
}

main()

// downloadFile()
// .then((file)=>saveFile(file))
// .then(()=>console.log("all done"));


// downloadFile((file)=>{
//     saveFile(file, ()=>{
//         console.log("all done");        
//     })
// })


