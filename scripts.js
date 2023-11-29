// EXERCISE ONE
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Logs each name to the console as a list.
names.forEach((item) => {
    console.log(item)
})

// Logs each name to the console with it's corresponding province.
names.forEach((item, index) => {
    console.log(`${item} (${provinces[index]})`)
})

// Turn all province names to uppercase using map.
const upperCaseArray = provinces.map((province) => province.toUpperCase()) 
console.log(upperCaseArray)

// Log the amount of characters in each name.
const nameLengthArray = names.map((name) => name.length)
console.log(nameLengthArray)

// Using sorted to sort all provinces alphabetically.
const sortedProvinces = provinces.toSorted()
console.log(sortedProvinces)

// Filter all provinces that have the word Cape in them and log how many there are to the console.
const filteredProv = provinces.filter((province) => (!province.includes("Cape")))
console.log(filteredProv.length)

// Creates a boolean value based on whether or not the province name contains an s || S.
const containsS = provinces.map(name => name.split('').some(char => char === 's' || char === 'S'))
console.log((containsS))

// Create an object of the person that matches the province in the array lists.
const provinceOfPerson = names.reduce((result, name, index) => {
    result[name] = provinces[index]
    return result
  }, {})
  console.log(provinceOfPerson);


// EXERCISE TWO
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// Log each product name only to the console.
console.log(products.forEach(product => console.log(product.product)))

// Filter out all products that have a name longer than 5 characters.
console.log(products.filter(product => (product.product.length <= 5)))

// Convert all prices that are strings to numbers, and remove all products from the array that do not have prices.
console.log(products
    .filter(product => parseInt(product.price) && !isNaN(product.price))
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
)

// Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
console.log(
  products
    .map(product => product.product)
    .reduce((result, name, index, array) => {
      if (index === array.length - 1) {
        return result + 'and ' + name;
      } else {
        return result + name + ', ';
      }
    }, '')
);

// Use reduce to calculate both the highest and lowest-priced items.
console.log(
  (() => {
    const validPrices = products
      .filter(product => parseInt(product.price) && !isNaN(product.price));
      const { highest, lowest } = validPrices.reduce((result, product) => {
      if (result.highest === null || product.price > result.highest.price) {
        result.highest = product;
      }
      if (result.lowest === null || product.price < result.lowest.price) {
        result.lowest = product;
      }
      return result;
    }, { highest: null, lowest: null });

    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })()
);

// Using only Object.entries and reduce recreate the object with the exact same values but change the keys to 'name' and 'cost'.

console.log(products.reduce((result, obj) => {
  const transformedObj = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key === 'product' ? 'name' : 'cost'] = value;
    return acc;
  }, {});

  result.push(transformedObj);
  return result;
}, []))