console.log(hello);
var hello = "world";
//var hello;
//console.log(hello); == undefined;
// hello = "world"
console.log("------------------------");
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
//var needle = 'haystack';
// test = undefined
// runtime error test is not a function

console.log("------------------------");

var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

//brendan = 'super cool';
//console.log(brendan); == "only okay"
//console.log(bendan) == "super cool"

console.log("------------------------");

var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// food == chicken
//console.log == chicken
//eat() = function()
//food = = half-chicken
// console.log == half-chicken
//food = gone
console.log("------------------------");
/* COMMENTED OUT SO I CAN KEEP RUNNING CODE WITH NO ERRORS
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
*/
//mean == function()
//console.log() == runtime error food is not defined
console.log("------------------------");

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
//console.log == undefined
// genre == disco
// rewind == function()
//genre == rock
//console.log == rock
// genre == r&b
//console.log == r&b
//console.log() == rock

console.log("------------------------");
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// dojo == san jose
//console.log == san jose
//learn == function()
//dojo - seatle
//console.log == seatle
//dojo == burbank
// console.log == burbank
// console.log == san jose

console.log("------------------------");
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
//makeDojo == function()
//console.log == {name : "Chicago", students : 65, hiring: true}
//console.log == {name : "Berekly", students : 0, hiring: "closed for now"}
