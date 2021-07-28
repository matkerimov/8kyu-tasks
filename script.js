// let array = [[23,54,65], [54,76,3], [45,356,3]]
// let result = []
// for (let i = 0; i < array.length; i ++){
//     for (let j = 0; j < array[i].length; j++){
//         result =[...result, array[i][j]]
//     }
// }
// console.log(result)

// --------------------чтобы вывести елемент с конца
// let array = [34, 56, 765]
// for (let i = array.length -1; i >= 0; i--){
//     console.log(array[i])
// }

//  ========== ** - это степень =============
// let array = [13, 34, 45, 3, 5, 3 ]
// let result = array.reduce((acc, item) => {
//     if ( item === 3){
//         return [...acc, item **2]
//     }
//     return acc
// }, [])
// console.log(result)

// const movie = {
//     title: "Бригада",
//     actors: ["Саша Белый", "Пчела", "Космос"],
//     year: 1999
// }
// let key = Object.keys(movie)
// console.log(key)
// let result = key.reduce((acc, item) => {
//     return [...acc, movie[item]]
// }, [])
// console.log(result)

// ----------------------------------code-wars /| 473 Kata Found |\ 8 kyu -------------------------------
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:
// P. S. You can use \n in string to jump to the next line.
// Note: newlines should be added between rows, but there should be no trailing newline at the end.
// task1 | Multiplication table for number
// function multiTable(number) {
//     let result = ''
//     for ( let i = 1; i <= 10; i++){
//         result += `${i} * ${number} = ${i * number}\n`
//     }
//     return result.slice(0, -1)
// }
// console.log(multiTable(5))
// ==================================================================

// task2 | What's the real floor?
// function getRealFloor(n) {
//     if ( n > 0 && n < 13){
//         return n -1
//     }else if (n > 13){
//         return n -2
//     }else{
//         return n
//     }
// }
// ==================================================================

// task3 | The Wide-Mouthed frog!
// Ваша цель в этом ката - создать завершенный метод mouth_size,
// этот метод принимает один аргумент animal, который соответствует животному,
// с которым столкнулась лягушка. Если это аллигатор (без учета регистра), верните маленький, иначе верните широкий.
// ---------------------------------------------------------------------------
// function mouthSize(animal) {
//     return animal.toLowerCase() == 'alligator' ? "small" : "wide"
// }
// console.log(mouthSize('alligator'))
// ==================================================================

// task4 | Convert number to reversed array of digits
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
// function digitize(n) {
// return n.toString().split('').reduce((acc, item) => {
//     return [...acc, +item]
// } , []).reverse()
// }
// console.log(digitize(348597))
// ==================================================================

// task5 | IXME: Replace all dots
// Предоставленный код должен заменить все точки. в указанной String str с дефисами - Но он не работает должным образом.
// Задача Исправьте ошибку, чтобы мы все могли вернуться домой пораньше. Примечания Строка str никогда не будет нулевой.
// ------------------------------------------------------------------
// var replaceDots = function(str) {
//     return str.replace(/\./gi, '-')
// }
// console.log(replaceDots("one.two.three"))
// ==================================================================

// task6 | Square(n) Sum
// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное в нее число, а затем суммировала результаты.
// Например, для [1, 2, 2] он должен вернуть 9, потому что 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.
// ------------------------------------------------------------------
// function squareSum(numbers){
//  return numbers.reduce((acc, item) => {
//      return acc+ Math.pow(item, 2)
//  }, 0)
// }
// console.log(squareSum([0, 3, 4, 5]))
// ==================================================================

// task7 | Count by X
// Создайте функцию с двумя аргументами, которая вернет массив первых (n) кратных (x).
// Предположим, что и данное число, и количество раз, которое нужно подсчитать, будут положительными числами больше 0.
// Возвращает результаты в виде массива (или списка в Python, Haskell или Elixir).
// countBy(2,5) === [2,4,6,8,10]
// ------------------------------------------------------------------
// function countBy(x, n) {
//     let z = []
//     let a = x
//     for ( let i = 0; i < n; i++){
//         z[i] = x
//         x += a
//     }
//
//     return z
// }
// console.log(countBy(2, 5))
// ==================================================================

// task8 | Compare within margin
// Создайте функцию close_compare, которая принимает 3 параметра: a, b и необязательное поле.
// Функция должна возвращать значение a ниже, близко к или выше b. a считается "близким к" b,
// если запас больше или равен расстоянию между a и b. Обратите внимание на следующее:
// Когда a близко к b, верните 0. Иначе... Когда a меньше b, верните -1. Когда a больше b, верните 1.
// Если маржа не указана, считайте ее нулевой. Предположим: маржа> = 0 Совет: в некоторых языках есть способ сделать параметры необязательными.

// function closeCompare(a, b, margin = 0){
//     if (a < b - margin){
//         return -1
//     }else if ( a - margin > b){
//         return  1
//     }
//         return 0
// }
// console.log(closeCompare(3, 5, 3 ))
// -----------------------------------------------------------------------------

// task9 | Get the mean of an array
// ---------------------------------
// function getAverage(marks){
// return Math.floor(marks.reduce((acc, item) => acc + item , 0) / marks.length)
// }
// console.log(getAverage([2,2,2,2]))
// console.log(getAverage([1,2,3,4,5,]))
// console.log(getAverage([1,1,1,1,1,1,1,2]))
// -----------------------------------------------------------------------------

// task10 | Quarter of the year
// -----------------------------
// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1
//     } else if (month <= 6) {
//         return 2
//     } else if (month <= 9) {
//         return 3
//     } else if (month <= 12) {
//         return 4
//     }
//
// }
// console.log(quarterOf(4))
// -----------------------------------------------------------------------------

// task11 | Reversed Words
// ------------------------
// function reverseWords(str){
//     return str.split(" ").reverse().join(" ")
// }
// console.log(reverseWords("hello world!"))
// -----------------------------------------------------------------------------

// task12 | Gravity Flip
// ---------------------
// const flip=(d, a)=>{
//     if ( d === 'R'){
//        return  a.sort((a, b) => a - b)
//     }
//     return a.sort((a, b) => b - a)
// }
// console.log(flip('R', [3, 2, 1, 2]))
// console.log(flip('L', [1, 4, 5, 3, 5]))
// -----------------------------------------------------------------------------

// task13 | Cat years, Dog years
// -----------------------------
// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0
//     let dogYears = 0
//     if ( humanYears === 1) return [1, 15, 15]
//     if ( humanYears === 2) return [2, 24, 24]
//     if (humanYears > 2){
//         catYears = 24 + (humanYears -2) * 4
//         dogYears = 24 + (humanYears -2) * 5
//     }
//     return [humanYears,catYears,dogYears];
// }
// console.log(humanYearsCatYearsDogYears(5))
// ---------------------------------------------------------------

// task14 | Grasshopper - If/else syntax debug
// -------------------------------------------
// function checkAlive (health) {
//     if (health > 0 && health <= 10) {
//         return true
//     } else if (health <= 0 && health >= -10) {
//         return false
//     }
// }
// function checkAlive (health) {
//     return health > 0
// }
// console.log(checkAlive(5))
// console.log(checkAlive(0))
// ------------------------------------------------------------------

// task15 | Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// ---------------------------------------------------------------------
// function greet(name) {
//     return `Hello, ${name} how are you doing today?`
// }
// console.log(greet("Zhaiyl"))
// ---------------------------------------------------------------------

// task16 | Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// ---------------------------------------------------------------------
// function makeNegative(num) {
//     if (num > 0){
//         return -num
//     }else if(num < 0){
//         return num
//     }
//     return 0
// }
// console.log(makeNegative(42))
// console.log(makeNegative(-42))
// console.log(makeNegative(0))
// console.log(makeNegative(0.12))
// ---------------------------------------------------------------------

// task17 | Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights.You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// ---------------------------------------------------------------------
// function updateLight(current) {
//     if (current === "green"){
//         return "yellow"
//     }else if(current === "yellow"){
//         return "red"
//     }
//     return "green"
// }
// // === === ===
// function updateLight(current) {
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }
// console.log(updateLight("green"))
// console.log(updateLight("yellow"))
// console.log(updateLight("red"))
// ---------------------------------------------------------------------

// task18 | Sum The Strings
//Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
// ---------------------------------------------------------------------
// function sumStr(a,b) {
//     return (+a + +b).toString()
// }
// sumStr = (a,b) => String(+a + +b)
// console.log(sumStr("4","5"))
// ---------------------------------------------------------------------

// task19 | Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// ---------------------------------------------------------------------
// function removeChar(str){
//     return str.slice(1, -1)
//
// }
// console.log(removeChar("HEllo"))
// ---------------------------------------------------------------------

// task20 | String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// ---------------------------------------------------------------------
// function repeatStr (n, s) {
//     return s.repeat(n)
// }
// console.log(repeatStr(3, "*"))
// console.log(repeatStr(2, "ha "))
// ---------------------------------------------------------------------

// task21 | Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight" if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight" if bmi > 30 return "Obese"
// ---------------------------------------------------------------------
// function bmi(weight, height) {
//     let bmi = weight/(height**2)
//     if (bmi <= 18.5){
//         return "Underweight"
//     }else if(bmi <= 25.0){
//         return "Normal"
//     }else if (bmi <= 30.0){
//         return "Overweight"
//     }
//     return "Obese"
// }
// function bmi(weight, height) {
//     const $ = weight / height**2;
//     return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
// }
// console.log(bmi(60, 1.85))
// ---------------------------------------------------------------------

// task22 | Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// ---------------------------------------------------------------------
// function removeExclamationMarks(s) {
//     return s.replace(/!/g, "")
// }
// console.log(removeExclamationMarks("Hello World!"))
// ---------------------------------------------------------------------

// task23 | Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.
//  By not consecutive we mean not exactly 1 larger than the previous element of the array.
//   E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// ---------------------------------------------------------------------
// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] + 1 !== arr[i]) {
//             return arr[i]
//         }
//     }
//     return null
// }
//
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
// ---------------------------------------------------------------------

//-task24 | Powers of 2
// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
// -----------------------------------------------------------------------
// function powersOfTwo(n){
//     let arr = String(n).split('')
//     return arr.reduce((acc, item) => {
//         Math.pow(2, item)
//     }, [])
// }
// console.log(powersOfTwo(1))
// -----------------------------------------------------------------------

// -task25 | Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//     Use conditionals to return the proper message:
// ----------------------------------------------------------------------
// function greet (name, owner) { return (name === 'Zhaiyl') ? 'Hello boss' : 'Hello guest' }
// console.log(greet('Daniel', 'Daniel'))
// console.log(greet('Daniel', 'Zhaiyl'))
// ----------------------------------------------------------------------







































