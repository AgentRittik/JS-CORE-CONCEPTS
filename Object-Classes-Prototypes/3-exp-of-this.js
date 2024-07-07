let Products = {
  arr: [
    {
      name: "IPhone 13 pro",
      price: 100000,
      description: "The apple iphone 13 pro",
      rating: 4.8,
      print: function () {
        console.log(this);
      },
    },
    {
      name: "MacBook M2",
      price: 150000,
      description: "The MacBook M2 pro",
      rating: 4.9,
      print: () => {
        console.log(this);
      },
    },
  ],

  category: "Electronics",
};

Products.arr[0].print(); // refer to the same object

Products.arr[1].print(); //  here it will refer to global this
