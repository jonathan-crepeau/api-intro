// console.log('Fear is the mind killer.');


// SECTION Callback Example

// NOTE - Synch Example:
// function greet(name){
//     return 'Hello ' + name;
// }

// function processUserInput(callback){
//     const name = prompt('What is your name?');
//     return callback(name);
// }

// let result1 = greet('Jonathan')
// console.log(result1);
// let result2 = processUserInput(greet);
// console.log(result2);


// SECTION Promise Example
// const randomNum = new Promise(function(resolve, reject) {
//     let num = Math.floor(Math.random() * (1 - 0 + 1) + 0);
//     if (num === 0) {
//         resolve("done! number was zero.");
//     // } else {
//     //     reject(new Error('whoops!'));
//     }
// })


// randomNum.then(
//     result => console.log(result),
//     // error => console.log(error),
// )


// SECTION - Callback Hell:

function doStepOne(init, callback){
    const result = init + 1;
    callback(result);
}

function doStepTwo(init, callback){
    const result = init + 2;
    callback(result);
}

function doStepThree(init, callback){
    const result = init + 3;
    callback(result);
}

function performOperation(){
    doStepOne(0, (result1) => {
        doStepTwo(result1, (result2) => {
            doStepThree(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
}

performOperation();