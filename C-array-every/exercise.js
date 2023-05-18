/*
   This program should check if the array `group` contains someone that isn't a student
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function checkGroup(group) {
  var groupContainsNonStudent = group.some(function(person) {
    return !group.includes(person);
  });
  return groupContainsNonStudent;
}

var groupContainsNonStudent = checkGroup(group);

if (groupContainsNonStudent) {
  console.log("The group has at least one intruder");
} else {
  console.log("The group contains only students");
}

/* EXPECTED RESULT */

// The group does not contain only students


