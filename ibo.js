/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
  
];

// Problem 1.
const getUniqueProductCount = (array) => {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        if (result[array[i].productName] === undefined) {
            result[array[i].productName] = 1;
        }
        else {
            result[array[i].productName]++;
        }
    }
    return result;
}

console.log(getUniqueProductCount(listOfProducts))


// Problem 2.
const getUniquePrducts = (array) => {
    
    for (let i = 0; i < array.length; i++) {
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].productName === array[j].productName) {
                array[i].quantity += array[j].quantity
                array[j] = ""
            }
        }

    }
    return array.filter((item) => item !== "");
}

console.log(getUniquePrducts(listOfProducts))



