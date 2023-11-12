function pop(arr){
    // save the first value in the array
    let firstValue = arr[0]
    console.log(arr, "array to start")
    console.log(firstValue, "zero position")
    //shift values to the right 
    for(let i = 0; i <arr.length; i++){
        arr[i] = arr[i+1] // set this position equal to the next 
    }
    arr.length = arr.length - 1
    arr.push(firstValue)
    console.log(arr, "array has been subtracted")
    return firstValue
}
console.log(pop([0,1,2,3])) 