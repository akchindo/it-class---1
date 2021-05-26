// 5 = 0101

// console.log(5 & 1)
// var x = 9
// let x = 5
// {
  // let x = 6
// }

// console.log (x)

const array = [1, 2.3, 'hello', true ]
console.log(array)
console.log(typeof array)
array[1] = 100
console.log(array[1])
array.push(100)
console.log(array)
array.pop()
console.log(array)
const newarray= array.slice(0, 3)
console.log(newarray)

const numbers = [10, 20, 30, 40, 50]
function add(){}
const changedNumbers = numbers.map(function (item) {return item/2})

console.log (changedNumbers)

const ages = [ 25, 30, 45, 60, 75]

// const newAges = ages.map(( age, index) => {
//   if (index == 1) {
//     return age/2
//   }else {
//     return age
//   }
// })

// console.log(newAges)


// const totalAges = ages.reduce((prev, next) => {
//   console.log()
//   return prev + next
// })
// console.log(totalAges)



const newAges = ages.map(( age, index) => {
    return age * 2 
})

console.log(newAges)


const totalAges = newAges.reduce((prev, next) => {
  console.log()
  return prev + next
})
console.log(totalAges)

