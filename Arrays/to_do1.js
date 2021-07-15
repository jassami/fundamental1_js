// Push Front
function pushFront(arr, val){
    var arr1=[val];
    for (var i=0; i<arr.length; i++){
        arr1.push(arr[i]);
    }
    return arr1;
}
console.log(pushFront([2,3,6], 4));

// Or:
function pushFront2(arr,val){
    for(var i=arr.length; i>0; i--){
        arr[i]= arr[i-1];
    }
    arr[0]= val;
    return arr;
}
console.log(pushFront2([2,3,6],4));


function popFront(arr) {
	var x= arr[0];
    for(var i=0; i<arr.length; i++){
        arr[i]= arr[i+1];
    }
    arr.pop();
    return x
}
console.log(popFront([3,1,7,90,3,5,1], 2));


// Insert At
function insertAt(arr, index, val){
    var x= arr[index];
    for( var i=arr.length; i>index; i--){
        arr[i]= arr[i-1];
    }
    arr[index]= val;
    return arr
}
console.log(insertAt([2,4,6,8], 2, 3));

// Remove At 
function removeAt(arr, index){
    var temp= arr[index];
    arr[index]= arr[arr.length-1];
    arr[arr.length-1]= temp;
    return arr.pop();
}
console.log(removeAt([3,1,7,90,3,5,1], 2));


// Or:
function removeAt(arr, index){
    var x = arr[index];
    for (var i= index; i<arr.length; i++){
        arr[i]=arr[i+1];
    }
    console.log(arr);
    arr.pop();
    console.log(arr);
    return x;
}
console.log(removeAt([3,1,7,90,3,5,1], 4));


function swap(arr){
    for(var i=0; i<arr.length-1; i+=2){
        var temp = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]= temp;
    }
    return arr;
}
console.log(swap([1,2,3,4]));


function removeDuplicates(arr){
    var cleanArr= [];
    for (var i=0; i<arr.length; i++){
        if (arr[i]!=arr[i+1]){
            cleanArr.push(arr[i]);
        }
    }
    return cleanArr;
}
console.log(removeDuplicates([2,2,4,6,6,8,4,4,9]));