/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.*/
let str = 'aaa@bbb@ccc';
    str = str.replace(/@/g, '!');
    console.log(str);

/*2. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат 31/12/2025'*/
let data = '2025-12-31';
console.log(data.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'));

/* 3. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово javascript'. Замените все тремя разными
способами (через substr, substring, slice).*/
let string = 'я учу javascript!',
    str1 = string.substr(2, 14),
    str2 = string.substring(2, 16),
    str3 = string.slice(2, string.length-1);
console.log(str1);
console.log(str2);
console.log(str3);

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы
кубов его элементов. Для решения воспользуйтесь циклом for.*/

let array = [4,2,5,19,13,0,10];
let sum = 0;
    for(i = 0; i<array.length; i++){
        let cube = Math.pow(array[i], 3);
        sum += cube;
    }
    console.log(Math.sqrt(sum));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

let a = prompt('введите число - задание 5'),
    b = prompt('введите число - задание 5'),
    c = a-b;
console.log(Math.abs(c));    

// вариант, когда значения уже установлены

function positive_number(a, b){
    let  c = Math.abs(a - b);
}
positive_number(3,5);
console.log(c);
positive_number(6,1);
console.log(c);

/*6. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой
задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые
состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/

function get_time(){
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        day = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear();
    
if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = '0' + minutes;
if (seconds < 10) seconds = '0' + seconds;
if (day < 10) day = '0' + day;
if(month < 10) month = '0' + month;

    console.log(hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year);
}
get_time();

/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква а.*/
let new_str = 'aa aba abba abbba abca abea';
    new_str = new_str.match(/a(b+)a/g);
console.log(new_str);    

/*8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код
страны> <код города или сети> <номер телефона>) и упрощенной проверки ввода простого
номера с кодом и без него. Функция должна возвращать true или false.*/

//+375, 80 - обязательно для РБ
// 29, 25, 44, 33 - наиболее распростаненные кода. их и будем проверять

function check_phone(phone){
    let mobile_phone = /^(\+375|80)(29|25|44|33)[\d]{7}$/;
    return mobile_phone.test(phone);
}
console.log(check_phone(prompt('введите номер телефона - задание 8')));

