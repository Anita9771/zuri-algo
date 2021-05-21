// Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

// Note:
// - for numbers that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 

// Use the following cases as guides:
// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`

function checkYuGiOh(n) {
  if(typeof (n) !== 'number'){
     console.log(`invalid parameter:` + `${JSON.stringify(n)}`)
     return (`invalid parameter:` + `${JSON.stringify(n)}`)
   }else{
   let arr = [];
   for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            arr.push("yu-gi-oh")
       } else if (i % 3 === 0 && i % 5 === 0){
           arr.push("gi-oh")
       } else if (i % 2 === 0 && i % 5 === 0){
           arr.push("yu-oh")
       } else if (i % 2 === 0 && i % 3 === 0){
           arr.push("yu-gi")
       } else if (i % 5 === 0)  {
           arr.push("oh")
       } else if (i % 3 === 0)  {
           arr.push("gi")
       } else if (i % 2 === 0)  {
           arr.push("yu")
       } else{
           arr.push(i)
       }
   }return arr
   } 
}
console.log(checkYuGiOh(10));