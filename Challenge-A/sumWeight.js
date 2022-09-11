var inputArray = [60, 40, 55, 75, 64, 32, 11, 50];


function sumWeight(array,step)
{
    // return array.length;
    var count = 0;
    var newArray = [];
    while (count < step) {
        var element = array[count];
        for (let index = count+step; index < array.length; index=index+step) {
            element += array[index];
        }
        newArray.push(element);
        count++;
    }
    return newArray;
}

console.log(sumWeight(inputArray,2));
