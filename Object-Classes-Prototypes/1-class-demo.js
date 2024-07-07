class Product {
  // data menmers ->  no need to define them with let,var,const
  name;
  price;
  discount;
  des;

  // behaviiours  -> member functions ->  we don't use function keyword to define the member functions

  display() {
    console.log("soemthing");
  }
}

// how to create a obj of this class

const p = new Product();


// This keyword ->  except one case the This refers to the call site.

