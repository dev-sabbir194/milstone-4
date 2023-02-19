var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
// when you know the specifice property name, use dot notation to get the property value
var penCount = shoppingCart['pen'];
// alternative system
// when you know the specific property name use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
// alternatives
var propertyName = 'mouse';
var propertyValue = shoppingCart
[propertyName];
console.log(propertyName, propertyValue);

var propertise = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(propertise);
console.log(propertyValues);


// set property value

shoppingCart.mouse = 15;
// alternatives
shoppingCart['mouse'] = 29;
console.log(shoppingCart);