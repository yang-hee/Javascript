const numbers = [90, 80, 70, 100]
// 1.
// 총합
//                                  누적 값(acc), numbers 배열의 각각의 요소
const sumNum = numbers.reduce(function ( result, number ) {
  return result + number // return 값이 다음 callback 함수의 result 값으로 들어간다
}, 0)
// initialValue 값 지정 안해줘서 numbers의 첫번째 값인 90이 자동으로 들어갔다.

console.log(sumNum)    // 340

// 2.
const sumNum2 = numbers.reduce(( result, number ) => {
  return result + number
}, 0)

// 3.
const sumNum3 = numbers.reduce(( result, number ) => result + number, 0)

// 1-2. 평균값
const sumNum4 = numbers.reduce(( result, number ) => result + number, 0) / numbers.length
