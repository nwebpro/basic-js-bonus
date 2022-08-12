const numbers = [45, 33, 25, 27, 77];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// For of Loop
for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'Walton Phone', price: 19000},
    {id: 2, name: 'Nokia Phone', price: 23000},
    {id: 3, name: 'Oppo Phone', price: 33000},
    {id: 4, name: 'Samsung Phone', price: 30000},
    {id: 5, name: 'Realme Phone', price: 29000},
    {id: 6, name: 'Poco Phone', price: 39000},
    {id: 7, name: 'Iphone 8', price: 50000},
]

// for(const product of products){
//     console.log(product);
// }


function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);