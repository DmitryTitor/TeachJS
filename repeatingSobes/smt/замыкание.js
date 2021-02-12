function f1() {
  let a = 1;

  return function f2() {
    console.log(a++);
  }
}

let f = f1();

f();
f();
f();


const obj = {
  a: 2,
  b: 3
}
