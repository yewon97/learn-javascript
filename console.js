const dog = {
  type: 'πΆ',
  name: 'μΈμΈ',
  owner: { name: 'yewon', age: 24, sex: 'female' },
  size: 'small',
};

// λ°°μ΄ ννλ‘ μ¬λ¬κ°μ§λ₯Ό μ λ¬ν  μ μμ
console.log('hi', dog);
console.log('logging', dog, dog.owner);

/* ν°λ―Έλμμ ν΄λΉ ν΄λμ λ€μ΄κ° νμ node console(.jsλ μλ΅ κ°λ₯) μ΄λΌκ³  μΉλ©΄ 
   js μ½μ μΆλ ₯ λ΄μ©μ΄ λμ΄ */

// log level
/* μ ν λ°°ν¬ λ¨κ³μμ μΆλ ₯ λμ§ μκ² νλ κ²μ΄ μ€μν¨ */
console.log('log'); // κ°λ°-μΆλ ₯
console.info('info'); // μ λ³΄

console.warn('warn'); // κ²½λ³΄λ¨κ³ (μ¬κ°μ μλ)
console.error('error'); // μλ¬! μμνμ§ λͺ»ν μλ¬, μμ€ν μλ¬
/* nodeμμλ κ·Έλ₯ μΌλ°μ μΌλ‘ μΆλ ₯, browserμμλ μ¬κ°μ±μ λ°λΌ λΈλμ, λΉ¨κ°μμΌλ‘ νμλμ μΆλ ₯λ¨ */

/* νΉμ ν μ‘°κ±΄μ λ§μ‘±μ΄ λ λλ§ μΆλ ₯μν¬ μ μμ */
// assert
console.assert(2 === 3, 'not same!'); // μΌμΉνμ§ μμ λλ§ μΆλ ₯ν¨
console.assert(2 === 2, 'same!');

// print object
console.log(dog);
console.table(dog); // νμ΄λΈ νμμΌλ‘ λ³΄κΈ° νΈνκΈ° μΆλ ₯ν¨
/* objectλ₯Ό μμΈν νννκ³  μΆμ λ */
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
console.log(`a ν¨μλ ${count}λ² μ€νλ¨`); */
function a() {
  console.count('a function');
}
a();
a();
console.countReset('a function'); // μ΄κΈ°ν
a();

// trace - μ΄λμ νΈμΆλμλμ§ μμ μλ λ°©λ²
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

/* λ°°ν¬ ν  λλ κΌ­ μ­μ ν΄μ! μ¬μ©μμκ² λΆνμν μ λ³΄λ€μ΄ λλ¬΄ λ§μ΄ ν¬ν¨λμ΄μ
μ±λ₯μ΄ μ νλκ±°λ λλ λ³΄μμ μνμ΄ λμ§μλλ‘ μ κ²½ μ¨μ μ¬μ©νμ! */