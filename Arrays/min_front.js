function minFront(arr){
    var index=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]<arr[i+1]){
            index= i;
        }
    }

    console.log(index);
}
minFront([4,2,1,3,5]);