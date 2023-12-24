/*
let myName: string = 'John'
let meaningOfLife: number
let isLoading: boolean
let langs: any
let jobs: string | number // union type. can be either number or string

myName = 'Zeynal'
// meaningOfLife = 'code' // can't be string
meaningOfLife = 20
isLoading = true
langs = true
langs = 2

const sumOfNumbers = (a: number, b: string) => a + b

const subOfNumbers = (a: number, b: number) => a - b
console.log(sumOfNumbers(5, '5'))

let postId: string | number
let isActive: number | boolean | string // 1 or 0; true or false; showing that there can be multiple types

let re: RegExp = /\w+/g

*/

/*
// Array
let strArr = ['one', 'two', 'three', 'four']
let languages = ['Javascript', 'Typescript', 'Java', 4728]
let mixedData = ['Lox', 5406, false]

// strArr[0] = 243
strArr.push('sahi')

// languages[0] = true
languages.unshift(1231)

// languages = strArr
// mixedData = languages
let test = []
let brands: string[] = []
brands.push('javascript')

// Tuple
let myTuple: [string, number, boolean] = ['John', 20, true] // more restricted array
let mixed = ['Zeynal', 19, true]

mixed = myTuple
// myTuple = mixed

// console.log(myTuple[3]) // undefined

// Object
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = brands
myObj = {}

const testObject = {
    username: 'Zeynal',
    isAdult: true
}

// type Guitarist = {
//     name: string,
//     active: boolean,
//     albums: (string | number)[],
//     age?: number
// }
interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[],
    age?: number
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

const greetGuitarist = (guitarist: Guitarist) => `Hello, ${guitarist.name?.toUpperCase()}!`
console.log(greetGuitarist(evh))

enum Grade {
    A = 1,
    B,
    C,
    D,
    E,
    F
}

console.log(Grade.A)
*/
