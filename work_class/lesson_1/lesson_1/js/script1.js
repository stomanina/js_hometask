// Операторы. Арифметические операторы. Строковые операторы.
// ----------------------------------------------------------
console.log("Операторы. Арифметические операторы. Строковые операторы");
console.log("--------------------------------------------------------");

// Cложение чисел
console.log(1 + 2); // 3

// Boolean + Number -> сложение
console.log(true + 1); // 2
console.log(false + 1); // 1

// Boolean + Boolean -> сложение
console.log(false + false); // 0
console.log(true + true); // 2

var a = "моя" + "строка"; // сложение строк, бинарный плюс
console.log(a); // моястрока

/* Если хотя бы один аргумент является строкой,
то второй будет также преобразован к строке. */
console.log('1' + 2); // 12
console.log(2 + '1'); // 21

// String + Boolean -> конкатенация
"foo" + false // "foofalse"

/* Остальные арифметические операторы работают только с числами
и всегда приводят аргументы к числу. */
console.log(2 - '1'); // 1
console.log("foo" - 3) // NaN

var x = 1;
x = -x; // унарный минус
console.log(x); // -1

var x = 1, y = 3;
console.log(y - x); // 2, бинарный минус

/* Унарный + приобразует строчные цифры в чисовой тип */
var apples = "2", oranges = "3";
console.log(+apples + +oranges); // 5

// Деление
console.log(6 / '2'); // 3
console.log(2 / 0); // возвращает Infinity
console.log(2 / 0.0); // тоже возвращает Infinity
console.log(2.0 / -0.0); // возвращает -Infinity

// Остаток от деления, %
console.log(5 % 2); // 1, остаток от деления 5 на 2
console.log(8 % 3); // 2, остаток от деления 8 на 3
console.log(6 % 3); // 0, остаток от деления 6 на 3

// Умножение
console.log(-2 * 2); // -4
console.log(Infinity * 0); // NaN
console.log(Infinity * Infinity); // Infinity
console.log("foo" * 2); // NaN

// Оператор =, присваивание
var x = 2 * 2 + 1;
console.log(x); // 5

// Присваивание по цепочке
var a, b, c;
a = b = c = 2 + 2;
console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

// Присваивание возможно в составе сложного выражения
var a = 1;
var b = 2;
var c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

// Инкремент ++ увеличивает на 1
var i = 2;
i++; // более короткая запись для i = i + 1.
console.log(i); // 3

// Декремент -- уменьшает на 1
var i = 2;
i--; // более короткая запись для i = i - 1.
console.log(i); // 1

/* Вызывать эти операторы можно
не только после, но и перед переменной: ++i.
Разница есть!!! */

var i = 1;
console.log(2 * ++i); // 4

var i = 1;
console.log(2 * i++); // 2,  выполнился раньше но значение вернул старое
console.log(i); // 2
console.log(2 * i++); // 4
console.log(i); // 3

// Арифметика с присваиванием
var n = 2;
n += 5; // теперь n=7 (работает как n = n + 5)
n *= 2; // теперь n=14 (работает как n = n * 2)
console.log(n); // 14

// Оператор , , запятая
var a = (5, 6);
console.log(a); // 6