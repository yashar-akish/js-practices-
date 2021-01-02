/**
 * 
 *      node main.js
 * 
 */

const myArray = [1, 2, 3, 4]
/**
 *    map()
 */
console.log(myArray.map(el => el + 2))

console.log(myArray.map(num => num ** 2))

console.log(myArray.map(num => 'B'))

console.log(myArray.map(num => 'number : ' + num + 'th'))

/**
 *    promises()
 */
const myPromise = new Promise((resolve, reject) => {

    if (true) {
        setTimeout(() => {
            resolve(`
            I have succeeded`)
        }, 2000)
    } else {
        reject('\n I have failed')
    }
})

myPromise
    .then(value => value + ' !!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue))

/**
 *    filter()
 */
const secondArray = [1, 3, 5, 7, 9]
console.log(secondArray.filter(el => el > 4))
console.log(secondArray.filter(el => true))
console.log(secondArray.filter(el => false))

/**
 *    includes()
 */
const thirdArray = [1, 2, 3, 4, 5]
console.log(thirdArray.includes(3))
console.log(thirdArray.includes(9))
console.log(thirdArray.includes(2, 3))  // if number '2' exist starting from third index
console.log(thirdArray.includes(2, 1))

/**
 * fetch
 */
/*
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch('http://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));

const myAsyncfunction = async () => {
    try {
        const usersResponse = await fetch('http://jsonplaceholder.typicode.com/users')
        const users = await usersResponse.json();
        const firstUser = users[0];
        console.log(firstUser);
        const postsResponse = await fetch('http://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
        const posts = await postsResponse.json();
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}
myAsyncfunction()
*/

/**
 *      find()
 */
const newArray = [1, 3, 5, 7, 9]
console.log(newArray.find(el => el === 5))
console.log(newArray.find(el => el > 4)) // the first element that returns true
const peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }, { id: 9 }]
const prs = peopleArray.find(person => person.id === 4)
console.log(prs)

/**
 * reduce()
 */
const arr = [1, 2, 3, 4, 5]
console.log(arr)

const sum = arr.reduce((accumulator, currentElement) => accumulator + currentElement, 0)
console.log(sum)

/**
 *      curring
 */
const multiply = (a, b) => a * b;
let n = multiply(4, 5);
console.log(n);

const curriedMultiply = (a) => (b) => a * b;
n = curriedMultiply(5)(6);
console.log(n);

const curriedMultiplyBy5 = curriedMultiply(5);
n = curriedMultiplyBy5(8);
console.log(n);
/**
 * END
 */