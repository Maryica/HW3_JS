// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени


function cubeNumber(number) {
    return number * number * number;
}
console.log(cubeNumber(2));
console.log(cubeNumber(3));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


// const salary = +prompt('Введите число');
// function getSalatyTax(salary) {
//     if (salary !== salary) {
//         alert('Вы ввели не число');
//     } else {
//         let tax = salary / 100 * (100 - 13);
//         console.log(tax);
//     }
// }
// getSalatyTax(salary);



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');
// const num3 = +prompt('Введите третье число');
// function getMaximumValue(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`Максимальное значение из чисел - число ${num1}`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`Максимальное значение из чисел - число ${num2}`);
//     } else {
//         console.log(`Максимальное значение из чисел - число ${num3}`);
//     }
// };

// getMaximumValue(num1, num2, num3);



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');

// function getSum(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// };
// function getDifference(num1, num2) {
//     if (num1 >= num2) {
//         let dif = num1 - num2;
//         console.log(dif);
//     } else {
//         let dif = num2 - num1;
//         console.log(dif);
//     }
// };
// function getMultiplication(num1, num2) {
//     let mult = num1 * num2;
//     console.log(mult);
// };

// function getDivision(num1, num2) {
//     if (num1 >= num2) {
//         let division = num1 / num2;
//         console.log(division);
//     } else {
//         let division = num2 / num1;
//         console.log(division);
//     }
// };

// getSum(num1, num2);
// getDifference(num1, num2);
// getMultiplication(num1, num2);
// getDivision(num1, num2);