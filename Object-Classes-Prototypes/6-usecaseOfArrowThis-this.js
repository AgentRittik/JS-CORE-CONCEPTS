let iphone = {
  name: "IPhone 13 pro",
  price: 100000,
  description: "The apple iphone 13 pro",
  rating: 4.8,
  print: function () {
    let iphoneRed = {
      name: "Iphone Red",
      price: 110000,
      display: () => {
        console.log(this); // AS display is a arrow function here so it don't have its own this so this is resolve lexically
      },
    };
    return iphoneRed.display;
  },
};

const result = iphone.print();
console.log(result);
result();

//If we return a arrow function to the global and later on we need to access outer function then arrow function helps there as This resolves lexcially.
