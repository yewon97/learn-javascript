// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banna']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'),
  jump: () => {console.log(`${name} can jump!`);},
}

json = JSON.stringify(rabbit);
console.log(json);

// json을 좀더 통제하고 싶다면?
// - 배열 형태로 전달하기
json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);
// - 콜백함수로 세밀하게 통제할 수 있음
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name'? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
console.clear();
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
console.log(typeof obj.birthDate);