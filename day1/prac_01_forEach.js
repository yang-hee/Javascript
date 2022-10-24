const colors = ['red', 'blue', 'green']

// 1. 컬러 출력할 printClr callback함수 생성
const printClr = function (color) {
  console.log(color)
}

// colors 순회!
colors.forEach(printClr) // 배열이름.forEach(callback함수(element, index, array))

// 2. 바깥에서 정의해줬던 callback 함수를 forEach문 안에 넣어준 것!
colors.forEach(function (color) {
  console.log(color)
})

// 3. 화살표 함수로 표현! function제거
colors.forEach((color) => {
  console.log(color)
})