const products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'apple', type: 'fruit' },
]
// 1.
// type이 fruit인 것만 출력!
const fruitFilter = function (product) {
  return product.type == 'fruit' // 객체의 속성값 .으로 접근가능!
}

const newArry = products.filter(fruitFilter)
console.log(newArry) // [ { name: 'banana', type: 'fruit' }, { name: 'apple', type: 'fruit' } ]

// 2.
const newArry2 = products.filter(function (product) {
  return product.type == 'fruit'
})

// 3.
const newArry3 = products.filter( (product) => {
  return product.type == 'fruit'
})

// 4.
const newArry4 = products.filter( (product) => product.type == 'fruit' )