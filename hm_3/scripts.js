//1
/*Выведите числа от 1 до 50 и от 35 до 8.*/

let q = [];
for(var i = 1; i <= 50; i++) {
    q.push(i);
   }
document.write('#1<br/>')
document.writeln(q + '<br/><br/>');


let z = [];
for(var i = 35; i >= 8; i--) {
    z.push(i);
   }
document.write('#1.1<br/>')
document.write(z, '<br/><br/>');

//2
/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/
let w = [];
let o = 89;
while (o >= 11){
    w.push(o);
	o--;
}
document.write('#2<br/>')
document.write(w + '<br/><br/>'); //не поняла, как выводить значения в столбик

//3
/*С помощью цикла найдите сумму чисел от 0 до 100.*/
let r = [];
let sum = 0;
for (i = 0; i<=100; i++) {
    r.push(i);
    sum += +i;
}
document.write('#3<br/>')
document.write(sum, '<br/><br/>');


//4
/*Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/
let num = 5,
    num_2;
for (let i = 1; i<=num; i++){
    num_2 = 0;
    for (let j = 0; j <= i; j++){
        num_2 += j;
    }
    console.log(num_2);
} 
   console.log('задание №5');

//5
/*Выведите чётные числа от 8 до 56. Решить задание через while и for.*/
for (let i = 8; i<=56; i++) {
    if (i % 2 !== 1) {        
console.log(i);
    }
}
console.log('задание №7');

//6
/*Необходимо вывести на экран полную таблицу умножения (от 2 до 10)*/
for (let i = 2; i<=10; i++){
    for (let q = 2; q <= 10; q++){
        document.write(i, '*', q, '=', i*q, '<br\/>');
    }
}

//7
/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.*/
let m = 0;
let n;
for (n=1000; n>50;){
    n = n/2;
    m++;
}
  console.log(m, "интераций", n);
  console.log('задание №8');

//8
/*Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.*/

let all_sum = 0,
    l = 0,
    suma, avr;
    
    while(true){
        suma = prompt('Введите несколько чисел - задание №8');
        if (suma == false) {
            break;
        }
        all_sum = +suma + +all_sum;
        l++;
       
    } avr = all_sum/l;
console.log(all_sum);
console.log(avr);
console.log('задание №9');


//9
/*Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

let Str = new String('4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57');
console.log(Str);
console.log(Str.valueOf());
//Str.split(,); 
let NewStr = [Str];
console.log(NewStr);
*/ 
// не могу понять, что делать, потому что двухзначные числа разделяются на два числа 
console.log('задание №10');


//10
/*Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.*/

let c = 32467,
    nw = String(c).split('');
    console.log('a. = ' + nw);
    console.log('b. = ' + nw.length)
    console.log('c. = ' + (nw.reduce(function(a, b) {return +a + +b})));
    console.log('d. = ' + nw.reverse());
