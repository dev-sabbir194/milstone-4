function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
    // console.log(sum);
}

// add(45, 50);

var total = add(80, 20);
console.log('total', total);



function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating singaras:', singaras);