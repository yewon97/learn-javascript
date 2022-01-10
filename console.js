const dog = {
  type: '🐶',
  name: '츄츄',
  owner: { name: 'yewon', age: 24, sex: 'female' },
  size: 'small',
};

// 배열 형태로 여러가지를 전달할 수 있음
console.log('hi', dog);
console.log('logging', dog, dog.owner);

/* 터미널에서 해당 폴더에 들어간 후에 node console(.js는 생략 가능) 이라고 치면 
   js 콘솔 출력 내용이 나옴 */

// log level
/* 제품 배포 단계에서 출력 되지 않게 하는 것이 중요함 */
console.log('log'); // 개발-출력
console.info('info'); // 정보

console.warn('warn'); // 경보단계 (심각은 아님)
console.error('error'); // 에러! 예상하지 못한 에러, 시스템 에러
/* node에서는 그냥 일반적으로 출력, browser에서는 심각성에 따라 노란색, 빨간색으로 표시되서 출력됨 */

/* 특정한 조건에 만족이 될때만 출력시킬 수 있음 */
// assert
console.assert(2 === 3, 'not same!'); // 일치하지 않을 때만 출력함
console.assert(2 === 2, 'same!');

// print object
console.log(dog);
console.table(dog); // 테이블 형식으로 보기 편하기 출력함
/* object를 자세히 표현하고 싶을 때 */
console.dir(dog, { colors: false, depth: 0 });
console.dir(dog, { colors: true, depth: 1 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
/* let count = 0;
function a() {
  count++;
}
a();
a();
a();
console.log(`a 함수는 ${count}번 실행됨`); */
function a() {
  console.count('a function');
}
a();
a();
console.countReset('a function'); // 초기화
a();

// trace - 어디서 호출되었는지 알수 있는 방법
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.trace();
  console.log('hi! :) ');
}
f1();

/* 배포 할 때는 꼭 삭제해서! 사용자에게 불필요한 정보들이 너무 많이 포함되어서
성능이 저하되거나 또는 보안에 위협이 되지않도록 신경 써서 사용하자! */