// Операторы сравнения
// ----------------------------------------------------------
console.log("Операторы сравнения");
console.log("--------------------------------------------------------");

/* Операторы сравнения возвращают
логические значения: true (верно), false (неверно) */
console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

var a = true; // можно присваивать явно
var b = 3 > 4; // или как результат сравнения
console.log(b); // false
console.log(a == b); // (true == false) выведет false

console.log('Б' > 'А'); // можно сравнивать строки (по Unicode символам), true

/* При сравнении разных типов, все преобразуется к числу */
console.log('2' > 1); // true, сравнивается как 2 > 1
console.log('01' == 1); // true, сравнивается как 1 == 1
console.log(false == 0); // true, false становится числом 0
console.log(true == 1); // true, так как true становится числом 1.

// Проблема с == - не может отличить 0 от false
console.log(0 == false); // true

// Та же ситуация с пустой строкой:
console.log('' == false); // true

// Можно сравнивать без преобразования типов к числу
console.log(0 === false); // false, т.к. типы различны

/* Сравнение с null и undefined.
Значения null и undefined равны == друг другу
и не равны чему бы то ни было ещё */
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // а так - true

//Значение undefined вообще нельзя сравнивать
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false