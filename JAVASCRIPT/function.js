// function createCounter() {
//     let counter = 0;
//     return function(){
//         counter++;
//         console.log(counter);
//         return counter;
//     }
// }

// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1();
// counter1();
// counter2();
// function bankAccount(){
//  const balance = 1000;
//     return {
//         showBalance(){
//             console.log(`My Balance is Rs. ${balance}`);
//         },
//         withdraw(amount){
           
//                 balance -= amount;
//                 console.log(`Withdrawn Rs. ${amount}. Remaining balance is Rs. ${balance}`);
//             }
//         }
//     }

// const myAccount = bankAccount();
// myAccount.showBalance();
// myAccount.withdraw(500);
// myAccount.showBalance();

// function Timer(){
//     let seconds = 0;
//     let intervalId = null;
    
//     return {
//         start(){
//             intervalId = setInterval(()=>{
//                 seconds++;
//                 console.log("Time: ",seconds,"sec");
//             },1000);
//         },
//         stop(){
//             clearInterval(intervalId);
//             intervalId = null;  
//             console.log("Timer stopped at ",seconds,"sec");
//         },
//         reset(){
//             this.stop();
//             seconds = 0;
//             console.log("Timer reset to 0 sec");
//         }
//     }
// }
// const myTimer = Timer();
// myTimer.start();
// myTimer.stop();
// myTimer.reset();

function counter(){
    let count = 0;
    return {
        increment(){
            count++;
            console.log("Count: ",count);
        },
        decrement(){
        count--;
        console.log("Count: ",count);  
        },
    }
}
const myCounter = counter();
myCounter.increment();
myCounter.decrement();