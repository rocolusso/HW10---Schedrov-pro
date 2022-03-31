'use strict';

// ДЗ выполнять в одном файле


//
// Решение :


// // 1 Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
// //
// const a = +prompt('Enter number') ;
// (a ===0) ? console.log('Верно'): console.log('Неверно');


// 2
//  Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
// const a = +prompt('Enter number');
// (a >0) ? console.log('Верно') : console.log('Неверно');


// 3 Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter number or string');
//
// if (a < 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 4 Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter a');
// (a >=0) ? console.log('Верно') : console.log('Неверно');

// 5 Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter a');
//
// if (a <=0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }


// 6  Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter a');
// (a != 0) ? console.log('Верно') : console.log('Неверно');

//        7 Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter test');
//
// if (a === 'test'){
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }


//       8  Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter a ');
//
//  (a==1) ? console.log('Верно') : console.log('Неверно');
// console.log(a);
// console.log(+a);


//        9 Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt('Enter number ');
//
// (a>0 && a<5) ? console.log('Верно') : console.log('Неверно');

//        10 Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
//           Выведите новое значение переменной на экран.

// let a = +prompt('Enter number ');
//
// (a ===0 || a===2) ? (a +=7) : (a /=10);
// alert(a);



//       11  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму
//     этих переменных, иначе выведите их разность (результат вычитания).
//

// let a = +prompt('Enter a num');
// let b = +prompt('Enter b num');
// (a <=1 && b>=3) ? console.log(a+b)  : console.log(a-b);


// let a = +prompt('Enter a num');
// let b = +prompt('Enter b num');
//
// if (a <=1 && b>=3){
//     console.log(a+b)
// } else {
//     console.log(a-b);
// }


//       12  Если переменная a больше 2-х и меньше 11-ти, или переменная
//     b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.
//

// let a =+prompt('Enter num a');
// let b =+prompt('Enter num b');
//
// if ((a>2 & a<11) & ( b<14 & b>=6 ) ){
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//       13  Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную
//     result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.


// const num = +prompt('Enter num (1 or 2 or 3 or4)');
// let result=null;
//
// switch (num){
//     case 1:
//         result='зима';
//         console.log(result);
//         break;
//     case 2:
//         result='весна';
//         console.log(result);
//         break;
//     case 3:
//         result='лето';
//         console.log(result);
//         break;
//     case 4:
//         result='осень';
//         console.log(result);
//         break;
//     default:
//         console.log('error data');
//         break;
// }