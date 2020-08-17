//задание №1
/*Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.*/
let cisla = [1, 2, 3, 4, 5];
for (let i = 0; i < cisla.length; i++) {
	document.write(cisla[i] + '<br\/>');
}

//задание №2
/*Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3.*/
let str = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i< str.length; i++){
    if (str[i] > -10 && str[i] < -3) {
            console.log(str[i]);
    }
}

//задание №3
/*Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.*/
let q = [],
    result = 0;
for(let i = 23; i <= 57; i++) {
    q.push(i);
    result += i;
   }
    console.log(q);
    console.log(result);

   let q1 = [], 
        i = 0;
   while(i++ <= 57) q1[i-23] = i;
   console.log(q1); 

//задание №4
/*Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
5.*/
   let r = ['10','20','30','50','235','3000'];
   for (let i=0; i<r.length; i++){
       if (r[i][0] == 1 ||r[i][0] == 2 ||r[i][0] == 5){
            console.log(r[i]);
       }
   }

//задание №5
/*Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.*/
let dni = ['ПН ','ВТ ','СР ','ЧТ ','ПТ ','СБ ','ВС '];
 for (let i=0; i<dni.length; i++){
     if (i < 5){
        document.write(dni[i]);
      } else {
        document.write('<b>' + dni[i] + '</b>');  }
 } document.write('<br/>')

//задание №6
/*Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.*/
let colors = ['red','orange','yeallow','blue']
colors[colors.length] = 'green';
i = colors.length - 1;
console.log(colors[i]);

//задание №7
/*Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.*/
let arrNum = [];
while (true) {
    let num = prompt ('введите число - задание 7');
    if (num != '') {
        arrNum.push(num);
        arrNum.sort(function (a , b) {
         return a - b
});
} else {
        break;
    }
}
console.log(arrNum);

//задание №8
/*Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.*/
let arr_8 = [12, false, 'Текст', 4, 2, -5, 0],
    h = arr_8.length;
    while(h -- != 0) {
    document.write(arr_8[h]);
}
    arr_8.reverse();
    console.log(arr_8);

//задание №9
/*Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/
let zero = [5,8,21,,9,78,,,,6],
x = 0;

console.log(zero.length);
for (let i = 0; i < zero.length; i++) {
    if (zero[i] == undefined){
    x++;
}
}
console.log(x);

//задание №10
/*Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2].*/

let arr_10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    a1 = arr_10.indexOf(0),
    a2 = arr_10.lastIndexOf(0),
    sum = 0;

if (a1 != -1 && a2 != -1) {
    for (i=a1; i <= a2; i++){
        sum = sum + arr_10[i];
    }
    console.log (sum);
}

//задание №11
/*Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь*/

let z = prompt('Введите число - задание 11');
    
for(let i = 0; i < z; i++){
    for(let j = 0; j < i; j++){
        document.write('^');
    }
document.write('<br/>');
}
    
//и тот вариант, что был на стримах 
let lines = line = prompt('введите число - задание 11'),
    a = ' ',
    b = '^';

while (line-->0){
    console.log(Array(line+1).join(a)+Array(2*(lines-line)).join(b)+Array(line+1).join(a));
}

