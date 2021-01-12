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