// This keyword ->  except one case the This refers to the call site.

let iphone = {
  name: "IPhone 13 pro",
  price: 100000,
  description: "The apple iphone 13 pro",
  rating: 4.8,

  display: function () {
    console.log("first display", this);
  },
};

let macBook = {
  name: "MacBook M2",
  price: 150000,
  description: "The MacBook M2 pro",
  rating: 4.9,
  display: function () {
    console.log("second display", this);
  },
};

iphone.display(); // here iphone is the calling context
macBook.display(); // here the macbook is the calling context

console.log(this); // here this is not associated with anything  ->  here it will refer to global obj
