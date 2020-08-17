/*Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
Примеры объектов:
 Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.
 Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки.
 Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.
 Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.
 Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов.
Можно выдумать любой другой объект. Кол-во методов и свойств может быть любым, но не
менее трех.*/

/*Используя полученные знания, создайте новый объект, который будет наследовать
свойства и методы объекта, созданного из предыдущего домашнего задания. Выполните
прототипное и функциональное наследование на выбор. Модифицируйте (доработайте) любой
из методов родителя в его потомке.*/


// шуточный пример для тренировки
/*let lights = function() {
	this.get = function() {
		this.oper = prompt('Введите какой свет горит: красный, жёлтый, зеленый');
		this.red = 'Теперь "Красный" свет горит, - Всем стоять он говорит!';
		this.yellow = 'Вот мигнул нам "Жёлтый" глазик, - Всем стоять велит проказник!';
		this.green = 'Замигал "Зелёный" глаз, - Можешь ты идти сейчас!';

		this.operation();
	};

	this.operation = function() {
		switch(this.oper) {
			case 'красный': this.result = alert(this.red); break;
			case 'жёлтый': this.result =  alert(this.yellow);break;
			case 'зеленый': this.result = alert(this.green); break;
            
			default: this.result = alert('Светофор сломан!');
		}

		this.show();
	};

	this.show = function() {
		document.write('Вот мигнул нам "Жёлтый" глазик, - Всем стоять велит проказник!' + '<br/>' + 'Теперь "Красный" свет горит, - Всем стоять он говорит!'  + '<br/>' + 'Замигал "Зелёный" глаз, - Можешь ты идти сейчас!');
	};
};

let traffic_lights = new lights();
traffic_lights.get();
*/

// основной объект
/* родитель - простой механизм часов, который может работать/не работать - functiom on/off */
/* новый объект - электронные часы. имеет две функции: отображение рабочего состояния (унаследована) и демонстрация времени (новая)*/

let clock = function() {
	
	var status = false;              // механизм не запущен                    

	this.on = function() {       // механизм работает
		status = true;
	};

	this.off = function() {      // механизм не работает
		status = false;
	};

	this.getStatus = function() {    //статус механизма: работает/не работает
		return status;
	};

};

let clockTab = function(time,data) {        // электронные часы отображают дату и время
	clock.apply(this, arguments);

	data = new Date(),
				hours = data.getHours(),
				minutes = data.getMinutes(),
				seconds = data.getSeconds(),
				day = data.getDate(),
				month = data.getMonth(),
				year = data.getFullYear();
			
		if (hours < 10) hours = '0' + hours;
		if (minutes < 10) minutes = '0' + minutes;
		if (seconds < 10) seconds = '0' + seconds;
		if (day < 10) day = '0' + day;
		if(month < 10) month = '0' + month;
		
	data = 	day + '.' + month + '.' + year;             //  вид отображения даты
	time = hours + ':' + minutes + ':' + seconds;       //  вид отображения времени

	this.getTime = function(){                                         // функция отображения времени
		console.log('текущая дата и время: ' + data + ' ' + time);        
	}

	this.run = false;
	var self = this;

	this.on = function() {
		if (self.getStatus()) {
			this.run = true;
		}
	};

	this.off = function() {
		if (self.getStatus()){
			this.run = false;
		}
	};

	let parentOff = this.off;
	this.off = function() {
		parentOff.call(this);
		self.off();
	};
	
	this.info = function(){												// функция отображения состояния
		console.log(self.run ? 'Работает.' : 'Не работает.');
	}
}

let ClockTab = new clockTab();
console.dir(ClockTab);

ClockTab.on();
ClockTab.info();
ClockTab.getTime();
