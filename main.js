/**
 * 
 *      node main.js
 * 
 */

const myArray = [1, 2, 3, 4]
/**
 *    map
 */
console.log(myArray.map(el => el + 2))

console.log(myArray.map(num => num ** 2))

console.log(myArray.map(num => 'B'))

console.log(myArray.map(num => 'number : ' + num + 'th'))

/**
 *    promises
 */const myPromise = new Promise((resolve, reject) => {

    if (true) {
        setTimeout(() => {
            resolve(' I have succeeded')
        }, 2000)
    } else {
        reject(' I have failed')
    }
})

myPromise
    .then(value => value + ' !!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue))

/**
 *    filter
 */
const secondArray = [1, 3, 5, 7, 9]
console.log(secondArray.filter(el => el > 4))
console.log(secondArray.filter(el => true))
console.log(secondArray.filter(el => false))

/**
 *    includes
 */
const thirdArray = [1, 2, 3, 4, 5]
console.log(thirdArray.includes(3))
console.log(thirdArray.includes(9))
console.log(thirdArray.includes(2, 3))  // if number '2' exist starting from third index
console.log(thirdArray.includes(2, 1))

/**
 * END
 */