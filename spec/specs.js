describe('pizza', function() {
  it("returns pizza size", function() {
    expect(pizza("small", 8.00)).to.contain("small");
  });
});
