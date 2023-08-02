// Code your solutions in this file
function writeCards(arrayOfNames, eventName){
    let newArray = [];

    for(let i = 0; i < arrayOfNames.length; i++){
        let message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
        newArray.push(message);
    }

    return newArray;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}