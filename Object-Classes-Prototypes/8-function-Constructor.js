function product(n, p, d) {
  // function constructor
  this.name = n;
  this.price = p;
  this.description = d;

  this.display = function () {
    console.log(this);
  };

  // return 10; // nothing happens
  // return {} //
}

const p = new product("bag", 100, "coolBag");
p.display();

// if we call it as a normal function

const normalCall = product("bag", 100, "coolBag");
console.log(normalCall); // it will be undefined as we are not returning anything from a function -> And all of the values are set in a global this

// if we have called it just like a construtor function so constructor functions automatically returns the object created by this
