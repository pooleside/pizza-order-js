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
