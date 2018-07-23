var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newChocolateBars = []

function addElementToBeginningOfArray(array, element){
 return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  array[index] = element 
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)

}

function accessElementInArray(array, index){
  array[index]
  return array
}

function destructivelyRemoveElementToBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array 
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.splice(0, array.length - 1 );
}

console.log(addElementToBeginningOfArray(chocolateBars, [1]))
