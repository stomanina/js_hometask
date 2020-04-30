// Преобразование типов данных
// ----------------------------------------------------------
console.log("Преобразование типов данных");
console.log("--------------------------------------------------------");


// Преобразование к строке с помощью String()
var q = 45;
console.log(q + " : " + typeof q); // 45 : Number
console.log(String(q) + " : " + typeof String(q)); // 45 : String

q = null;
console.log(q + " : " + typeof q);
console.log(String(q) + " : " + typeof String(q));

// ... к строке с помощью +. Любой тип + строка = строка.
console.log(true + "test"); // "truetest"
console.log("123" + undefined); // "123undefined"

// Преобразование к числу с помощью Number()
q = " 0045 ";
console.log(q + " : " + typeof q);
console.log(Number(q) + " : " + typeof Number(q));

// ... к числу с помощью +
q = +" 00678 ";
console.log(q + " : " + typeof q);

q = +" 003.90 ";
console.log(q + " : " + typeof q);

/* Преобразование к числу специальных значений
null и undefined (только при арифметических операциях и сравнениях) */
console.log(null >= 0); // true, т.к. null преобразуется к 0
console.log(null > 0); // false (не больше), т.к. null преобразуется к 0
console.log(null == 0); // false (и не равен!), т.к. == рассматривает null особо.
console.log(undefined > 0); // false, т.к. undefined -> NaN
console.log(undefined == 0); // false, т.к. это undefined (без преобразования)
console.log(undefined < 0); // false, т.к. undefined -> NaN

// Преобразование с помощью вспомогательных ф-ций

/* parseInt() и ее аналог parseFloat() преобразуют строку символ за символом, пока это возможно */
console.log(parseInt('12px')) // 12, ошибка на символе 'p'
console.log(parseFloat('12.3.4')) // 12.3, ошибка на второй точке
console.log(parseInt('a123')); // NaN

// Проверка строки на число с помощью isNaN()
var x = -13.44;
console.log(isNaN(x)); // false

// Проверка на число (не Nan и не Infinity) с помощью isFinite()
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false