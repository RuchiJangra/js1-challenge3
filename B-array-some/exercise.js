/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

function isNull(pairsByIndex) {
  var containsNull = pairsByIndex.some(item => item === null);
  return containsNull;
}

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

var hasNull = isNull(pairsByIndex);
console.log(pairs);