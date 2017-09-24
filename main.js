const numberToFind = 3;
const arr = [0, 4, 5, 6, 3];

function binarySearch(min, max) {
  arr.sort(function (a, b) {
    return a - b;
  })
  while (max >= min) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] === numberToFind) {
      return alert("found at index " + arr.indexOf(numberToFind));
    } else if (arr[middle] > numberToFind) {
      max = middle - 1;
    } else if (arr[middle] < numberToFind) {
      min = middle + 1;
    }
  }

}

binarySearch(0, 4);
