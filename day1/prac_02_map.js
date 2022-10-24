const numbers = [1, 2, 3, 4, 5]

// 1.
// 각각의 값을 2배 해주는 callback 함수 정의
const doubleEle = function (number) {
  return number * 2
}

// 반환 값이 있기 때문에 새로운 배열에 저장
const newArry = numbers.map(doubleEle)

console.log(newArry)   // [2, 4, 6, 8, 10]

// 2. map의 인자에 callback함수 넣기
const newArry2 = numbers.map(function (number){
  return number * 2
})

// 3. function 제거
const newArry3 = numbers.map((number) => {
  return number * 2
})

// 4. 중괄호와 return 제거! 함수의 return이 한줄일때만?
const newArry4 = numbers.map((number) => number * 2)