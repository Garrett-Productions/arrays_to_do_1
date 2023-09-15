//In JavaScript, the Array object has numerous useful methods. It does not, however, 
//contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), 
//to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr) {
    var rando_num;
    var temp;
    for (var i = 0; i < arr.length; i++) { //math.random gets num between 0 and 1, then times by my array length of 4 will probably be 2.9 or 3.4 and math.floor will round it down to a whole number
    rando_num = Math.floor(Math.random() * arr.length); // randonum is set to 4 because of my array length
        console.log(rando_num)
    temp = arr[i]; //temp equals the first value in the array, 2,
        //console.log(temp)
        //console.log(arr[i])
    arr[i] = arr[rando_num]; // In this algo were basically creating 2 variables and changing them around with math.random each time we run the loop getting a different output by shuffling.
    arr[rando_num] = temp; 
        //console.log(arr[rando_num])
}
return arr;
}
console.log(shuffle([2, 5, 65, 92]));


// Array [-1,7,3] would represent three buildings: first is actually out of view below street level, 
// behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. 
// Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4].

function skyline_heights(building_heights) {
    var max_building_height = 0;
    var visible_buildings = [];
// below we are setting list_of_buildings equal to the array that we pass in, then we set varB equal to the legnth of that array. 'varC < varB' means if 0 < the legnth of the array then run the code block
// in the code block we set our created var 'building_height' equal to 0 position of our array
    for (var building_height, varC = 0, list_of_buildings = building_heights, varB = list_of_buildings.length; varC < varB; varC++) { //second time this runs varC is set to 1
        building_height = list_of_buildings[varC];
// if -1 > 0 then push it into the array, but it's not so it won't push.
//second time it's run, if 1 > 0 the push it,
    if (building_height > max_building_height) {
        visible_buildings.push(building_height);
        max_building_height = building_height;
        }
    }
    return visible_buildings;
    }
console.log(skyline_heights([-1,2,8,6]));
console.log(skyline_heights([-1, 1, 1, 7, 3]));


// Create a standalone function that accepts two arrays and combines their values sequentially into a new array. 
// Extra values from either array should be included afterward. 
// Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].

function zipIt(one_arr, two_arr){
    var output = [];
    if (one_arr.length > two_arr.length){
        var max = one_arr.length;
    }
    else{
        var max = two_arr.length;
    }
    for (var i = 0; i < max; i++){
        if (one_arr[i] != undefined){
            output.push(one_arr[i]);
        }
        if (two_arr[i] != undefined){
            output.push(two_arr[i]);
        }
    }
    for (var i = 0; i < output.length; i++){
            if (output[i] > output[i+1]){
            var temp = output[i];
            output[i] = output[i+1];
            output[i+1] = temp;
            }
        }
    return output
}
console.log(zipIt([4,15,100], [10,20,30,40]))