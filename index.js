function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown (int){
    while (int>=0) {
    console.log(int--)
    }
}

countDown(10);