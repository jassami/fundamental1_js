function reverse(arr){
    for(var i=0; i<Math.trunc(arr.length/2); i++){
        var temp= arr[i];
        arr[i]= arr[arr.length-1-i];
        arr[arr.length-1-i]= temp;
    }
    console.log(arr);
}
reverse([4,2,8,5,0]);


function rotateArr(arr, shiftBy){
    // x is number of shifts
    var x=  Math.abs(shiftBy);
    while (x>0){
        if (shiftBy>0){
            var temp= arr[arr.length-1];
        for (var i=arr.length-1; i>0; i--){
            arr[i]= arr[i-1];
        }
        arr[0]=temp;
        } else{
            var temp= arr[0];
            for( var i =0; i <arr.length; i++){
                arr[i]= arr[i+1];
            }
            arr[arr.length-1]= temp;
        }
        x --;
    }
    return arr;
}
console.log(rotateArr([1,2,3],-1));


function filter(arr, min, max){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>min && arr[i]<max){
            for (var t=i; t<arr.length-1; t++){
                arr[t]=arr[t+1];
            }
            arr.length= arr.length-1;
            i =i-t;
        }
    }
    return arr;
}
console.log(filter([1,3,2,6,4,7,9,6], 2,6));


function concat(arr1,arr2){
    for (var i=0; i<arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}
console.log(concat([1,2,3], [6,7,8]));