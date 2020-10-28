/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(elem){
  return elem.text;
}

const getPriority = function(elem){
  return elem.priority;
}

const isComplete = function(elem){
  return elem.complete;
}

const isHighPriority = function(element){
  return element.priority > 1;
}









/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(arr) {
  const newArr = [];
  for (const elem of arr) {
      const result = getTodoName(elem);
      newArr.push(result);
  }

  return newArr;
}

const priorities = function(arr) {
  const newArr = [];
  for (const element of arr) {
      const result = getPriority(element);
      newArr.push(result);
  }

  return newArr;
}

const namesAndPriorities = function(arr){
  // return names.map(arr)
}
// getTodoNames.map(namesAndPriorities)

// const justComplete = function(elem){
//   const newArr = [];
//   for(const new of elem){
//     const result = !isComplete(new);
//     newArr.push(result);
//   }
//   return newArr
// }

const justComplete = function(arr) {
  const newArr = [];
  for (const element of arr) {
      const result = isComplete(element);
      if(result === false){
      newArr.push(result);
      }
  }

  return newArr;
}

const priority2Only = function(elem){
  
}

const priority1Only = function(elem){
  
}

const justNotComplete = function(elem){
  
}





// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justComplete,
  priority2Only,
  priority1Only,
  justNotComplete,
}
