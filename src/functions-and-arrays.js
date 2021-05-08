// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(value1, value2) {
  return value1 > value2 ? value1 : value2
}
console.log(greatestOfTwoNumbers(78, 23))
// Progression #2: The lengthy word
const words = [
  'mystery',
  'brother',
  'crocodile park',
  'aviator',
  'crocodile',
  'pearlbeachtttttuuuuuu',
  'orchard',
  'crackpot',
]
const emparr = []
console.log(findScaryWord(words))
function findScaryWord(num) {
  if (num == 0) return null
  else {
    if (num.length == 1) return num[0]
    else {
      var longestWord = ''
      num.forEach((item) => {
        if (item.length > longestWord.length) {
          longestWord = item
        }
      })

      return longestWord
    }
  }
}

// for (let i=0;i<num.length;num++){

//   if(num[i].length>longestWord.length && ){
//       longestWord=num[i];
//    }
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
const val = [78]
let sum = netPrice(val)
function netPrice(item) {
  if (!item.length) return 0
  else {
    let total = 0
    item.forEach((i) => {
      total = total + i
    })
    return total
  }
}
//BONUS: Calculate the sum
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9]
const strAvg = ['subha', 'arvi', 'arul', 'sangee']
const singArr = [89]
const mixArr = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10, true]
function add(item) {
  if (!item.length) return 0
  //return 0 if elemetnts not present
  else {
    let tot = 0
    item.forEach((j) => {
      //to loop through array elements
      if (isNaN(j) && typeof j != 'string')
        throw new Error("Unsupported data type sir or ma'am")
      if (typeof j == 'string')
        //if input value is not a number
        tot = tot + j.length
      else tot = tot + j // if  input value is a number
    })
    return tot
  }
}
console.log('add', add(mixArr))
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers

function midPointOfLevels(item) {
  if (!item.length) return null
  else {
    let sumamount = 0
    let n = item.length
    item.forEach((elem) => {
      sumamount = sumamount + elem
    })
    average = sumamount / n
    return average
  }
}
// Progression 4.2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
]
function averageWordLength(item) {
  if (!item.length) return null
  else {
    let sumamount = 0
    let n = item.length
    item.forEach((elem) => {
      sumamount = sumamount + elem.length
    })
    average = sumamount / n
    return average
  }
}

//BONUS
// avg(wordsFind)
function avg(item) {
  if (!item.length) return null
  else {
    let sumamount = 0
    let average = 0
    let n = item.length
    item.forEach((elem) => {
      if (typeof elem == 'string') sumamount = sumamount + elem.length
      else sumamount = sumamount + elem
    })
    average = sumamount / n
    return JSON.parse(average.toPrecision(3))
  }
}
console.log('avg', avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false]))
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour',
]

uniqueArray(wordsUnique)
function uniqueArray(item) {
  if (!item.length) return null
  else {
    let temp = []
    // for (let i = 0; i < item.length; i++) {
    //   for (let j = i + 1; j < item.length; j++) {
    item.forEach((i) => {
      if (!temp.includes(i)) temp.push(i)
    })
    return temp
  }
}

// Progression #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
]

searchElement(wordsFind, 'trouble')
function searchElement(item, x) {
  let count = 0
  if (!item.length) return null
  else {
    item.forEach((i) => {
      if (i === x) count = 1
    })
  }
  if (count == 1) return true
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
]
howManyTimesElementRepeated(wordsCount, 'machine')
function howManyTimesElementRepeated(item, x) {
  if (!item.length) return 0
  else {
    let count = 0
    item.forEach((i) => {
      if (i.includes(x)) count++
    })
    return count
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
]
const matr = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]
maximumProduct(matrix)
function maximumProduct(item) {
  let prod = 1
  item.forEach((elem) => {
    elem.forEach((i) => {
      prod = prod * i
    })
  })
  return prod
}
