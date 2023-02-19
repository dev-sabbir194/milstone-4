var money = 40;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice <= money){
    console.log('Dan Dan danish khamu');
}

else if (butterBread < money){
    console.log('Butter bon khamu')
}
else if(toastBiscuit < money){
    console.log('chubai chubai toast biscuit khamu');
}

else{
    console.log('Khali cha e saster jonno valo')
}



// multiple condition part two

var math = true;
var geometry = true;
var straightlint = false;

if (math == true){
    if(geometry == true){
    if(straightlint == true){

    }
    else{
        console.log('baka pothe colba na');
    }
    }
    else{
        console.log('pithagorous hoite parba na');
    }
}