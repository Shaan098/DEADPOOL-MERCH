// const nums = [2,4,6,8,5,7,2,40]
// nums.forEach((nums)=>{
//     console.log(nums*2)
// })
// const nums = [2,4,6,8]//for each used to just iterate the old array
// nums.forEach((nums,i)=>{
//     console.log(nums*nums,[i])
// })
// const nums = [2,4,6,8]//map creates a new array everytime
// nums.map((nums,i)=>{
//     console.log(nums*nums,[i])
// })
// const nums = [4,5,8,44,77,74,12,69,71]
// const high = nums.filter(nums=>nums>10);
// console.log(high);
// ===== REDUCE FUNCTION EXAMPLES =====

// Example 1: Sum all numbers in an array
const nums = [2, 4, 6, 8, 5, 7, 2, 40];
const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value
console.log("Sum:", sum); // 74

// Example 2: Product of all numbers
const product = nums.reduce((acc, val) => acc * val, 1);
console.log("Product:", product); // 53760

// Example 3: Find the maximum value
const max = nums.reduce((acc, val) => val > acc ? val : acc);
console.log("Maximum:", max); // 40

// Example 4: Count occurrences of elements
const arr = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const count = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});
console.log("Count:", count); // { apple: 3, banana: 2, cherry: 1 }

// Example 5: Flatten a nested array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, val) => acc.concat(val), []);
console.log("Flattened:", flattened); // [1, 2, 3, 4, 5, 6]

// Example 6: Convert array to object with key-value pairs
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});
console.log("User Map:", userMap); // { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }