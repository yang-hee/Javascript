# 1019

`//` 주석 `/* */` 여러 줄 주석

# 식별자

- 식별자(변수명) 은 문자, $, _로 시작해야함
- 대소문자 구분
- for, if, function 같은 예약어 사용 불가능

## 카멜케이스(camelCase, lower-camel-case)

- 낙타봉우리처럼 중간에 대문자를 사용하여 구분
- 가장 많이 쓸 것. `변수, 객체, 함수` 에 사용

## 파스칼케이스(PascalCase, upper-camel-case)

- 카멜케이스에 시작글자 대문자 추가
- `클래스, 생성자` 에 사용

## 대문자 스네이크 케이스(SNAKE_CASE)

- 상수(constants) : 변하지 않을 변수값 에 사용

```jsx
// 값이 바뀌지 않을 상수
const PI = Math.PI

// 재할당이 일어나지 않는 변수
const NUMBERS = [1, 2, 3]
```

# 변수

변수 선언 키워드 `let, const, var`

변수는 `선언, 할당, 초기화`의 과정으로 생성된다

```jsx
let foo // 선언 + 초기화, undefined의 값이 들어가있다
// 초기화는 변수에 처음으로 값을 저장한 시점. 처음으로 undefined라는 값이 들어간 것!

foo = 11 // 할당 foo에 11의 값을 넣어준다. 변수에 값 저장
```

- 기본적으로는 const 사용 권장! 재할당 하는 경우(반복문)에만 let 사용.
- 변수는 재할당, 재선언을 많이 안하는 것이 좋다!

## let(재할당 O, 재선언 X)

지역변수

```jsx
let number = 10 
number = 20 // 재할당!
let number = 20 //재선언! 안된다!
```

## const(재할당 X, 재선언 X)

읽기 전용 상수

```jsx
const number = 10  // 선언, 초기화
const number2  // const는 기본값이 있어야 하기 때문에 오류! 선언 안됨!
number = 10    // 재할당 X! 오류!
const number = 10 // 재선언X 오류!
```

## var(재할당 O, 재선언 O)

변수 선언

유지보수 입장에서 좋지 않음 사용 안할 것!

`호이스팅` 으로 인해 문제 발생.

ES6 버전 이후부터는 사용X

```jsx
// 호이스팅!!
console.log(name) // undefined 출력. 암묵적으로 var name 선언 해줌.
var name = '홍길동'
```

# 데이터타입

## 원시타입(Primitive type)

### Number

정수, 실수 표현

```jsx
const a = 13
const b = 2.998e8 // 2.998 * 10^8 = 299,800,000
const c = Infinity // 양의 무한대
const d = -Infinity // 음의 무한대
const e = NaN // Not-A-Number(숫자가 아님) 연산이 안되는 경우. 0을 문자로 나눈다? 0/0 같은 경우
/*
NaN
1. 숫자로 읽을 수 없는 경우
2. 결과가 허수인 경우
3. 피연산자가 NaN (7**NaN)
4. 정의할 수 없는 계산식 (0*Infinity)
5. 문자열 포함 덧셈이 아닌 식 ("가"/3)
```

### String

문자열. 작은 따옴표 사용!

문자열 연산은 덧셈만 가능함! 문자열 붙이기

```jsx
// 문자열 덧셈!
const word1 = '안녕'
const word2 = '하세요'
const word3 = word1 + word2

// 줄바꿈!
const word4 = '안녕 \n하세요'

// Template Literal ` 줄바꿈 가능! 문자열 사이 변수 삽입 가능! fstring같은느낌
const word5 = `${word1}
하십니까`

```

### Empty Value

빈 값을 표현하는 방식이 2가지가 있는 건 자바스크립트의 설계 실수..

1. null
    - 값이 없음을 의도적으로 표현할 때!
    - `let name = null`
    - typeof null을 했을 때 null은 object 타입으로 뜬다.. 자바스크립트 초창기 설계 오류! 신경쓰지말자
2. undefined
    - 값을 할당하지 않고 변수 선언하면 자동으로 할당!

### Boolean

`true` 와 `false` 소문자 사용!

`false`

- undefined
- null
- Number : 0, -0, Nan
- String : 빈 문자열

`true`

- Number : false인 경우 제외 나머지
- String : 빈 문자열 제외 나머지
- Object

## 참조타입(Reference type)

### 함수

매개변수보다 인자의 개수가 많은 경우. 순서대로 인자개수만큼 출력

인자의 개수가 적은경우. 부족한 만큼 undefined로 적용됨.

### 함수 선언식

- 호이스팅 된다.
- 익명 함수 불가능

```jsx
console.log(add(2, 7)) // 함수 이전에 선언해도 작동한다! (호이스팅)

function add(num1, num2) {
  return num1 + num2
}

console.log(add(2, 7))
```

### 함수 표현식

- 호이스팅 없다! 표현식을 쓰도록 하자!
- 익명 함수 가능

```jsx
const sub = functions (num1, num2) {
	return num1 - num2
}

console.log(sub(2, 7))

// 변수에 Anonymous같이 기본값 저장가능하다
const greeting = function (name = 'Anonymous') {
  return `Hi ${name}`
}

console.log(greeting())
```

### `Spread syntax(...)`

```jsx
// 1. 배열의 복사
let a = ['head', 'hand']
let b = ['body', ...a, 'knees']
// ['body', 'head', 'hand', 'knees']

// 2. 함수에서의 사용
const a = function ( arg1, arg2, ...restArgs) {
	return [arg1, arg2, restArgs]
}

restArgs(1, 2, 3, 4, 5) // [1, 2, [3, 4, 5]]
```

### 화살표 함수(Arrow Function)``

### 화살표 함수(Arrow Function)

```jsx
const greeting = function (name) {
  return `Hi ${name}`
}

// 1단계나 3단계 사용하세요
// 1. function 생략 가능
const greeting = (name) => {
	return `Hi ${name}`
}

// 2. 매개변수가 하나라면 매개변수의 '()' 생략 가능. 에어비앤비 스타일가이드에서는 권장X
const greeting = name => {
	return `Hi ${name}`
}

// 3. 함수의 내용이 한줄이라면(return 값이 한줄?) '{}' 'return' 생략가능
const greeting = name => `Hi ${name} // 최종형태!
```

```jsx
// 인자가 없는경우! '()'나 '_'로 표시
let noArgs = () => 'No args'
let noArgs = _ => 'No args'

// 예외사항 return 값이 객체인경우 중괄호 생략X
let returnObject = () => { return { key: 'value'} }
// return 생략하고 싶으면 괄호로 감싸주기. 잘 사용X
returnObject = () => ({ return { key: 'value'})

```

```jsx
// 즉시실행함수
// 함수를 소괄호로 감싸주고 뒤에 소괄호 안에 인자 값을 넣어 즉시 실행
// 한번 실행으로 끝. 똑같은 함수 재호출 불가능!
(function(num) {return num ** 3})(2) // 8
```

### 객체

- Array / Object

### 배열 (Array)

- 인덱스 접근
    
    `const numbers = [1, 2, 3, 4, 5]`
    
    - **`음의 정수`** 인덱스로 값 접근 불가능!
        - console.log(numbers[0])
            - 1
        - console.log(**`numbers[-1]`**)
            - **undefined**
        - console.log(numbers[numbers.length - 1])
            - 음의 값으로 접근하려면 `length` 사용
            - 5
- 배열 메서드(기초)
    - `.reverse()`
        - 배열 순서 반대 정렬
    - `.push(추가 할 값)` & `.pop()`
        - 가장 뒤에 요소 추가 / 제거
    - `.unshift(추가 할 값)` & `.shift()`
        - 가장 앞에 요소 추가 / 제거
    - `.includes(찾고싶은 값)`
        - 특정 값 찾기. **참/거짓** 반환
    - `.indexOf(찾고싶은 값)`
        - 특정 값 찾기. **인덱스/-1** 반환
        - 찾고자 하는 값이 여러개 있다면 가장 앞의 index 출력해준다
    - `.join()`
        - 기본적으로는 `,` 로 구분해준다. `''` 해주면 , 없이 붙어서 출력. `' '` 해주면 공백 삽입
- 배열 메서드(심화) - **배열 순회** 하면서 특정 로직 수행
    - 인자로 `callback 함수` 를 받는다.
        - 함수의 내부에서 실행될 목적으로 넘겨받는 함수
    - `forEach()`
        - 반환 값이 없다. → 바로바로 출력 해줄 것
        
        ```jsx
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
        
        // 4. 중괄호 삭제!
        colors.forEach((color) => console.log(color))
        ```
        
    - `map()`
        
        반환값이 있다. → 새로운 배열 반환
        
        ```jsx
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
        ```
        
    - `filter()`
        
        콜백함수 반환 값이 참인 요소들만 모아준다.
        
        ```jsx
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
        ```
        
    - `**reduce()`-> 하나의 결과 값 반환**
        
        총합, 평균 같은 하나의 값 계산 동작 필요할 때 사용
        
        `acc` : callback 함수의 반환 값이 누적되는 변수
        
        `initialValue` : acc의 초기값, 선택값! 필수인자 아니다.
        
        ```jsx
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
        ```
        
    - find()
        
        callback 함수 반환값이 참이면, 조건을 만족하는 첫번째 요소 반환. 없으면 undefined
        
        ```jsx
        const avengers = [
          { name: 'Tony Stark', age: 45 },
          { name: 'Steve Rogers', age: 32 },
          { name: 'Thor', age: 40 },
        ]
        
        const avenger = avengers.find(( avenger ) => {
          return avenger.name === 'Tony Stark'
        })
        
        console.log(avenger)
        ```
        
    - some()
        
        하나라도 조건을 만족하면 **true** 반환!
        
        빈 배열이거나 모든 요소가 통과 못하면 **false**!
        
        ```jsx
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
        ```
        
    - every()
        
        모든요소가 통과하면 true, 빈 배열은 true
        
        하나의 요소라도 통과하지 못하면 false
        
        some 코드의 반대로 해봐!
        

# 연산자

== 형변환이 일어난다.. 일단 안쓸거 특수한 케이스에서 사용할 것

===(일치연산자) 암묵적 형변환 일어나지 않음. 같은 객체, 같은 타입, 같은 값인지 비교!

## 논리연산자

`&&` and

`||` or

`!` not

## 삼항연산자

`조건식 ? 반환값1 : 반환값2`

```jsx
// 조건식이 참이면 왼쪽값 아니면 오른쪽값
// Math.PI > 4 가 거짓이므로 Nope 반환함
const result = Math.PI > 4 ? 'Yep' : 'Nope'
```

# 조건문

## if

```jsx
const name = 'manager'

if (name === 'admin'){
	console.log('관리자님 환영합니다')
}else if (name === 'manager'){
  console.log('매니저님 환영합니다')
}else{
	console.log('${name}님 환영합니다')
}
```

## switch

```jsx
const name = '홍길동'

switch(name) {
	case '홍길동': {
		console.log('홍길동 환영')
		break
	}
// break문이 없으면 홍길동으로 위의 case를 지나도 아래 case문까지 출력함.
	case 'manager': {
		console.log('매니저 환영')
		break
	}
// case 매칭 된것이 없을 때 출력 됨!
	default: {
		console.log('환영')
	}
```

# 반복문

## while

참일 동안 실행

```jsx
let i = 0

while (i < 6){
	console.log(i)
	i += 1 // 재할당 되고 있기 때문에 위에서 let으로 받아준것!
}
// 0, 1, 2, 3, 4, 5
```

## for

특정 조건이 거짓으로 판별될 때까지 반복

`for ([초기문]; [조건문]; [증감문])`

```jsx
/* 
1. let i = 0 반복문 진입, 변수 i 선언. 반복문 처음에만 동작!
2. 조건문(i < 6) 평가.
3. console.log(i) 실행 후 증감문(i++) 실행
조건문에 맞지 않을때까지 2~3번 반복!
*/ 
for (let i = 0; i < 6; i++) {
	console.log(i)
}
// 0, 1, 2, 3, 4, 5
```

## for…in

- 객체(python의 딕셔너리 같은거) 순회할 때 사용! → 배열도 가능하긴 하다

## for…of

- 배열같은 반복 가능한 객체 순회 시 사용!

```jsx
const arr = [3, 5, 7]
/*
{
	0 : 3
	1 : 5
	2 : 7
} 과 같은 형태로 저장됨
*/

// 배열에서 for in 순회를 안쓰는 이유!
for (const i in arr) {
	console.log(i)          // 0 1 2
}

for (const i of arr) {
	console.log(i)          // 3 5 7
}
```

**`for문은 재할당 for..in이나 for..of는 변수를 새로 정의하여 사용하므로 const 사용할 수 있다!`**

- for (const i in arr)
- for (const i of arr)
- for (let i = 0; i < arr.length; i++)

# 객체

Array / Object

딕셔너리와 비슷하다. { key:value } 쌍으로 표현

- key
    - 문자열 타입만 가능
    - 구분자가 있는경우 따옴표로 묶어표현
- value
    - 모든 타입 가능

```jsx
// 
const myInfo = {
  name: 'jack', 
  phoneNumber: '123456',
  'samsung product': {
    buds: 'Buds pro',
    galaxy: 'S99'
  }
}

console.log(myInfo.name)
console.log(myInfo['name'])

// samsung product처럼 ''로 묶인 키는 두번째 방법으로만 접근 가능
console.log(myInfo['samsung product'].galaxy)
```

## 객체관련 문법

### 속성명 축약

key와 할당하는 변수 명 같을 경우 축약 가능

```jsx
var books = [’JavaScript’, ‘Python’]

var bookShop = {
	books, // books: books와 같다!
}
```

### 메서드명 축약

메서드 선언 시 function 생략

```jsx
// function 생략!! 함수 선언처럼 사용
const obj = {
	greeting() {
		console.log('Hi!')
	}
}

obj.greeting()
```

### 계산된 속성

```jsx
// key의 이름을 표현식 이용하여 생성
const key = 'country'
const valut = ['한국', '미국', '일본', '중국']

const myObj = {
	[key]: value,
}

console.log(myObj) // { country: ['한국', '미국', '일본', '중국'] }
console.log(myObj.country) // ['한국', '미국', '일본', '중국']
```

### `구조 분해 할당`

배열 객체를 분해하여 속성을 변수에 할당

```jsx
const userInformation = {
	name: 'kim',
	userId: 'yang',
	phoneNumber: '010-1234-1234',
	email: 'yang@naver.com'
}

const { name } = userInformation
const { userId } = userInformation
const { phoneNumber } = userInformation
const { email } = userInformation

const { name, userId } = userInformation
```

### Spread syntax (…)

객체 내부에 객체 전개 가능! 얕은 복사

```jsx
const obj = {b: 2, c: 3, d: 4}
const newObj = {a:1, ...obj, e: 5}

console.log(newObj) // {a:1, b: 2, c: 3, d: 4, e: 5}
```

### JSON

Object처럼 보이지만 형식이 있는 **문자열!!!!**

- JSON을 Object로 사용하기 위해 변환 작업 필요

```jsx
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
// API랑 소통할 때 사용해야함..?
// 오브젝트 값에 접근 가능! jsonToObj.coffee 같은 형식으로!
const jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj)          // { coffee: 'Americano', iceCream: 'Mint Choco' }
console.log(typeof jsonToObj)   // Object
```

- **배열 순회 비교**
    - forEach 권장! break, continue 필요할경우 for…of!

![Untitled](1019%2020d34bd975c3427eb9e6f5c727f37c57/Untitled.png)