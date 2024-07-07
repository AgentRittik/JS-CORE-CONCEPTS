class Product {
  // data menmers ->  no need to define them with let,var,const
  //   name;
  //   price;
  //   description;     // if wee define the values inn the constructor we don't need to return them

  //constructor

  // [[[WE CAN'T DO CONSTRUCTOR OVERLOADING IN JS ]]]
  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    // return 10; // inside a constructor if you return Primitive -> NO effect  - > because constructorr are meant to return Objects

    //return { my: "self" }; // here we are returning a Non Primitiive  ->  not the object created by new keyword will be replaced by this
    // return [1, 2, 3];

    // if we don't return anything then it is same as saying returning [[This]]
  }

  // behaviiours  -> member functions ->  we don't use function keyword to define the member functions

  display() {
    console.log("something");
  }
}

const p = new Product("iphone", 1000000, "new Iphone"); //  whenever we use new keyword it will create a brand new empty object for us

/// here the constructor  is getting called using new  -> so who is the calling context ->> {} empty object created by new

/**
 *      That's why when we do -> this.name = "something " inside costructor
 *                               at that thime [[This]] refers to the object created by new keyword -> so we are setting the values in that object
 *
 *                                  { name : "something"}
 */
console.log(p);

/**
 *   Product() -> calling the constructor of the class - >if we not written then js call the default constructor
 */
