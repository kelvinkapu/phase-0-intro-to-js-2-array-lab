// // Write your solution here!

// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat() {
//   cats.push("Ralph");
// }
// console.log()

// module.exports = {
//   cats,
//   destructivelyAppendCat,
// };

// // const cats = ["Milo", "Otis", "Garfield"];

// // function destructivelyAppendCat() {
// //   cats.push("Ralph");
// // }

// function destructivelyPrependCat() {
//   cats.unshift("Bob");
// }

// function destructivelyRemoveLastCat() {
//   cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//   cats.shift();
// }

// function appendCat(name) {
//   return [...cats, name];
// }

// function prependCat(name) {
//   return [name, ...cats];
// }

// function removeLastCat() {
//   return cats.slice(0, -1);
// }

// function removeFirstCat() {
//   return cats.slice(1);
// }

// module.exports = {
//   cats,
//   destructivelyAppendCat,
//   destructivelyPrependCat,
//   destructivelyRemoveLastCat,
//   destructivelyRemoveFirstCat,
//   appendCat,
//   prependCat,
//   removeLastCat,
//   removeFirstCat,
// };
// 
const cats= ['Milo','Otis','Garfield'];
// console.log(cats)
// cats.push('Ralph');
// console.log(cats)
// destructivelyAppendCat={...cats}
// console.log(destructivelyAppendCat)
// destructivelyAppendCat;
function destructivelyAppendCat(){
  cats.push("Ralph");
//   console.log(destructivelyAppendCat)
}
console.log()

function destructivelyPrependCat(){
  cats.unshift('Bob')
}
console.log()

function  destructivelyRemoveLastCat(){
  cats.pop()
}
console.log()

function destructivelyRemoveFirstCat(){
  cats.shift()
}
console.log()


function appendCat(){
return [...cats,"Broom"]
}
console.log()
 
function prependCat(){
return ['Arnold',...cats]
}

function removeLastCat(){
  return cats.slice(0, -1)
}
function removeFirstCat(){
  return cats.slice(1)
}