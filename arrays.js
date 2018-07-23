var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newChocolateBars = []

function addElementToBeginningOfArray(array, element){
 return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return [array.push(element)]
 
}

function accessElementInArray(array, index)
  return array[]

console.log(addElementToBeginningOfArray(chocolateBars, "Payday"))
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "Payday"))