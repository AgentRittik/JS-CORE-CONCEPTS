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
    iphoneRed.display();
  },
};

iphone.print();

// lets see how this is resolved inside arrow function
/**
 *  As diisplay is a arrow function so it don't have it's own this , so it will go and try to find the this lexicallly
 *
 *  Lexically means - >  it will go outside and try to find the normal function
 *                  - >  then in that normal function if this present then it will take taht this
 *                  - >  if this also not found in that particular function then it will continue to check and not found then at last return the global This
 */

let iphone13 = {
  name: "IPhone 13",
  price: 100000,
  description: "The apple iphone 13",
  rating: 4.8,
  print: () => {
    let iphoneRed = {
      name: "Iphone Red",
      price: 110000,
      display: () => {
        console.log(this); // AS display is a arrow function here so it don't have its own this so this is resolve lexically
      },
    };
    iphoneRed.display();
  },
};

iphone13.print(); /// here it will return the global this
