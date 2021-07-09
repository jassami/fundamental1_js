var mynum= 42;
var myname= "Jade";
var temp = mynum;
mynum = myname;
myname= temp;
console.log(mynum, myname);


for (var i= -52; i <1067; i ++){
    console.log(i);
}

function beCheerful(){
    console.log("good morning");
}
for (var i= 0; i <99; i ++){
        beCheerful();
    }

var i = 2000;
while ( i<=5280){
    console.log(i);
    i +=1;
}



function birthday(a,b){
    if (a == 6|| a==25 && b== 25|| b==6){
        console.log("How did you know?")
    } else {
        console.log("Just another day...")
    }
}
birthday(25,8);



function leap(a){
    if( a% 400 ==0){
        console.log("It's a leap  year!");
    } else {
        console.log("It's not a leap year");
    }
}
leap(2000);


var count= 0;
for (i= 512; i<=4096; i++){
    if(i %5==0){
        console.log(i);
        count +=1;
    }
}
console.log("count =",count)


var x= 0;
while(x<=60000){
    x= x*6;
    console.log(x);
    x +=1;
}


for (var x=1; x<=100; x++){
    if (x%5==0){
        console.log("coding");
    }
    if(x%10==0){
        console.log("Dojo");
    } else {
        console.log(x);
    }
}


function know(incoming){
    var x= incoming;
    console.log(x);
}
know("hello");


var sum = 0;
for (var i= -300; i<=300; i++){
    if (i %2 !=0){
        sum = sum + i;
    }
}
console.log(sum);


var x=2016;
while(x>0){
    console.log(x);
    x -= 4;
}

var lownum= 2;
var highnum= 9;
var mult = 3;
for (i=highnum; i>=lownum; i--){
    if(i%mult==0){
        console.log(i)
    }
}


var para1=3;
var para2=5;
var para3=17;
var para4=9;
while(para2<=para3){
    if(para2%para1==0){
        if(para2==para4){
            para2 +=1;
            continue;
        } else{
            console.log(para2);
            para2 +=1;
        }
    } else{
        para2 +=1; 
        continue;
    }
}
