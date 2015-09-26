describe('pizza', function() {
  it("returns pizza size", function() {
    expect(pizza("small", 8.00)).to.contain("small");
  });
});

describe('topping', function() {
  it("returns topping name", function() {
    expect(topping("onions", 1)).to.contain("onions");
  });
});

describe('topping', function() {
  it("returns topping name", function() {
    expect(topping("onions", 1)).to.not.contain("sausage");
  });
});

describe('addTopping', function() {
  it("returns pizza size, base price, topping name and topping price", function() {
    expect(addTopping("medium", 10, "cheese", 1)).to.contain("medium,10,cheese,1");
  });
})
