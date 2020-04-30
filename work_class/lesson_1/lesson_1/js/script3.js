// Логические операторы
// ----------------------------------------------------------
console.log("Логические операторы");
console.log("--------------------------------------------------------");

// Оператор ИЛИ
var result = 3 || 2;
console.log(result);

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// || запинается на правде
console.log(1 || 0); // 1
console.log(true || 'неважно что'); // true
console.log(null || 1); // 1
console.log(undefined || 0); // 0

var undef, // переменная не присвоена, т.е. равна undefined
	zero = 0,
	emptyStr = "",
	msg = "Привет!",
	result = undef || zero || emptyStr || msg || 0;
console.log(result); // выведет "Привет!" - первое значение, которое является true

/* Оператор И возвращает true,
если оба аргумента истинны, а иначе – false */
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// Первый аргумент - true, поэтому возвращается второй аргумент
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// Первый аргумент - false, он и возвращается, а второй аргумент игнорируется
console.log(null && 5); // null
console.log(0 && "не важно"); // 0

// Оператор НЕ - !
var value = 0,
	result = !value;
console.log(result); // true

console.log(!true); // false
console.log(!0); // true