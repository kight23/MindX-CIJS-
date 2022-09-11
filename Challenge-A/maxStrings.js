var inputArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]
console.log(maxStrings1(inputArray));
console.log(maxStrings2(inputArray));
console.log(maxStrings3(inputArray));
function maxStrings1(inputArray){
    
    var newArray = [];
    inputArray.forEach(element => {
        if(element.length == Math.max(...(inputArray.map(el => el.length))))
        {
            newArray.push(element);
        }
    });
    return newArray
}

function maxStrings2(inputArray){
    
    var max = 0;
    var newArray = [];
   
    inputArray.forEach(element => {
        if(element.length > max)
        {
            max = element.length
        }
    });
    inputArray.forEach(element => {
        if(element.length == max)
        {
            newArray.push(element);
        }
    });
    return newArray
}

function maxStrings3(inputArray){
    
    var max = 0;
    var newArray = [];
   
    for (let index = 0; index < inputArray.length; index++) {
        max < inputArray.length ? max = inputArray.length : max = max;
    }
    inputArray.forEach(element => {
        if(element.length == max)
        {
            newArray.push(element);
        }
    });
    return newArray
}