function Pizza (size, price){
  this.size = size;
  this.price = price;
  this.topping = [];
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
