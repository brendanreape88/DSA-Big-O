//dog drill  1: O(1) Constant

//dog drill 2: O(n) Linear

//even or odd: 0(1) Constant

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//are you here?: O(n^k) Polynomial

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//doubler: O(n) Linear

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//naive search: O(n) Linear

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//creating pairs: 0(n) Linear

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//random element: O(1) Constant

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
