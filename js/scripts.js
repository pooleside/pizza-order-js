function Pizza (size, price){
  this.size = size;
  this.price = price;
  this.toppings = [];
}


var pizza = function (size, price){
  var returnString = "";
  var newPizza = new Pizza(size, price);
  returnString = "You ordered a " + newPizza.size + " pizza. Cost is " + newPizza.price;
  return returnString;
}

function Topping (name, price){
  this.name = name;
  this.price = price;

}

var topping = function (name, price){
  var returnString = "";
  var newTopping = new Topping(name, price);
  returnString = "You added " + newTopping.name + " Cost is " + newTopping.price;
  return returnString;
}
var tpizza = function addTopping (pizza, topping){ //objects
  pizza.toppings.push(topping); //adds a topping into toppings arrary.  This brings pizza and topping together
  return pizza;
}
var addTopping = function (size, price, toppingName, toppingPrice) {
  var tempPizza = new Pizza (size, price);  //instance of pizza class
  var tempTopping = new Topping (toppingName, toppingPrice); //parameter names
  tempPizza.toppings.push(tempTopping);
  // tempPizza = addTopping (tempPizza, tempTopping); //passing
  var returnString = tempPizza.size + "," + tempPizza.price + "," + tempPizza.toppings[0].name + "," + tempPizza.toppings[0].price;
    return returnString;
}
