function countdown(num){
    var arr= [];
    var count =0;
    for(i= num; i>=0; i--){
        arr.push(i);
        count +=1;
    }
    return arr
}
console.log(countdown(5));



function printReturn(arr){
    console.log(arr[0]);
    return arr[1];
}
console.log(printReturn([2, 7]));


function firstLingth(arr){
    var sum=arr[0];
    sum = sum + arr.length;
    return sum;
}
console.log(firstLingth([2,5,4,8]));
console.log(firstLingth(["what",5,4,8]));
console.log(firstLingth([false,5,4,8]));


function greaterThanSecond(arr){
    var count =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]> arr[1]){
            console.log(arr[i]);
            count +=1;
        }
    }
    return count
}
console.log(greaterThanSecond([7,2,3,1,5,6,0,1,11,56,9]));



function greaterThanSecond(arr){
    var newarr=[];
    var count =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]> arr[1]){
            newarr.push(arr[i]);
            count +=1;
        }
    }
    console.log(count);
    return newarr;
}
console.log(greaterThanSecond([7,2,3,1,5,6,0,1,11,56,9]));


function thisLengthThatValue(num1, num2){
    var arr=[];
    if(num1==num2){
        console.log("jinx");
    } 
    for(var i=0; i<num1; i++){
        arr.push(num2);
    }
    return arr;
}
console.log(thisLengthThatValue(3,8));


function fitFirst(arr){
        if (arr[0]> arr.length){
            console.log("Too big!");
        }
        else if (arr[0]<arr.length){
            console.log("Too small!");
        } 
        else{
            console.log("Just right!");
        }
}
fitFirst([5,5,8,1,9])


function fehCel(fdegree){
    var cels= (fdegree -32)*5/9;
    return cels;
}
console.log(fehCel(65));


function celsFeh(cdegree){
    var feh = (9/5 * cdegree) + 32;
    console.log(feh);
}
celsFeh(28);


for(i= 200; i>-50; i--){
    if (i==(9/5 * i) + 32){
        console.log(i);
        break;
    }
}