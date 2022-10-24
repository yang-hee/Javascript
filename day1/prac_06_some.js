const arr = [1, 2, 3, 4, 5]

// 1.
const result = arr.find(function (elem) {
  return elem % 2 === 0
})

// 2.
const result2 = arr.find((elem) => {
  return elem % 2 === 0
})

// 3.
const result3 = arr.some((elem) => elem % 2 === 0) // True

console.log(result3)