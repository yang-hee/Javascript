// 객체
const jsonData = {
  coffee: 'Americano',
  iceCream: 'Mint Choco',
}

// Object -> json
// JSON 모듈! import 필요 없다
const objToJson = JSON.stringify(jsonData)

console.log(objToJson)          // { "coffee": "Americano", "iceCream": "Mint Choco" }
console.log(typeof objToJson)   // String


// json -> Object
const jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj)          // { coffee: 'Americano', iceCream: 'Mint Choco' }
console.log(typeof jsonToObj)   // Object
