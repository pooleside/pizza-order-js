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
