//Control flow in javascript

//if & else

let hour = 12;

if (hour >= 6 && hour < 12){
    console.log("Good morning");
}
else if(hour >= 12 && hour < 18){
    console.log("Good afternoon");
}
else{
    console.log("Good evening")
}

//switch & case

let user = 'guest';
 
switch(user){
    case 'verified':
    console.log('Verified user')
    break;

    case 'guest':
    console.log('Guest user')
    break;
    default :
    console.log('Unknown user')
};

//for loop
for(j = 0 ; j <= 10 ; j++){
    if(j % 2 !== 0) console.log(j)
}

//While loop

let i = 10;
while(i <= 20){
    if(i % 2 !== 0) console.log(i)
    i++
}

//Do while loop

let k = 20;
do{
    if(k % 2 !== 0) console.log(k)
    k++
}while(k <= 30)

//Infinite loop

//This is created in another file