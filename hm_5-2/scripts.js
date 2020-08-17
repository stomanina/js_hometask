/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
передаются параметром. */

function func_1 (a,b,c){
    return ( a - b ) / c
}
let task_1 = func_1 (12,6,3);
console.log(task_1);

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается
параметром. */
function func_2 (a,b){
    return Math.pow(a,b)
    } 
    let task_21 = func_2 (4,2);
    let task_22 = func_2 (4,3);
  
    console.log (task_21);
    console.log (task_22);
    
/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b. */
function func_31 (a,b){   
    return Math.max(a,b)
}
    let task_31 = func_31 (2,5);
    console.log(task_31);
        

function func_32 (a,b){
    return Math.min(a,b)
}
    let task_32 = func_32 (10,4);
    console.log(task_32);

// еще один вариант
function max (a,b){
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let task_311 = max (5,2);
console.log(task_311);

function min (a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
let task_322 = min (3,8);
console.log (task_322);

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми
значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая
– выводить полученный массив. */

//не смогла решить иначе
function createArray(length) {
    let g = prompt ('введите начало диапазона');
    length = prompt('введите конец диапазона');
    
        let array = [];
        for (let i = g; i <= length; i++) {
            array[i] = i;
        } 
        console.log(array); 
}
createArray();

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
если нечетное - false. */

function isEven (a){
    if (a % 2 == 0){
        return true;
    } else {
        return false;
    }
}
let task_5 = isEven(11);
console.log(task_5);

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый
массив, где останутся лежать только четные из этих чисел. Для этого используйте
вспомогательную функцию isEven из предыдущей задачи. */

function get_array (array){
    let arrEven = [];
    
    for (let i = 0; i <= array.length; i++){
        if (isEven(array[i])) arrEven.push(array[i]);
    }
    return arrEven;
}
let task_6 = get_array ([2,5,7,8,10]);
console.log(task_6);

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):

Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр,
непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то
пирамида должна быть нарисована этим символом, например:
*/

//где-то допущена ошибка, потому что выводит одновременно

    function piramida(x) {
        if (isNaN(x)){
            for (let i = 0; i<=z; i++){
            let arr = [];
            arr[0] = i;
            for (let j = 1; j<=i; j++){
                arr.push(i);
            } 
        console.log(arr.join(' '));
        }}
        for(let i = 0; i < z; i++){
        for(let j = 0; j < i; j++){
            document.write('^');
                }
            document.write('<br/>');
    }   
    };
let z = prompt('Введите число - задание 7');
console.log(piramida());


/* 8. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до
1000. */

function get_array2 (){
    let arrEven2 = [];
    a = 0;
    arrEven2[0]=0;
    arrEven2[1]=1;
    
for (let i = 2; a<1000; i++) {
    a = arrEven2[i-1] + arrEven2[i-2];
       arrEven2[i] = a;
}   console.log(arrEven2);
}
    get_array2();

/* 9. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию. */

function get_sum (str){
    str = String(str);
    sum = 0;

    for(let i = 0; i < str.length; i++){
        sum = sum +  Number(str[i]); 
    }
    console.log(sum);
    
    if(sum >= 9){
        get_sum(sum);
    }
}
get_sum(172);

/* 10. Дан массив с числами (передается параметром). Выведите последовательно его
элементы, используя рекурсию и не используя цикл.*/

function get_num (arr){
        console.log(arr[i]);
        i++;
        if (i<arr.length) get_num(arr);
}
let i = 0;
get_num([3,7,9]);