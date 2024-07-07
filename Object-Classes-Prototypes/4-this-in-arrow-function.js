let iphone = {
  name: "IPhone 13 pro",
  price: 100000,
  description: "The apple iphone 13 pro",
  rating: 4.8,
  print: function () {
    console.log(this);
  },
};
let macbook = {
  name: "MacBook M2",
  price: 150000,
  description: "The MacBook M2 pro",
  rating: 4.9,
  print: () => {
    console.log(this);
  },
};

iphone.print();
macbook.print();

// Inside arrow functions this does not refers to  the calling context
