/*Реализуйте класс или ф-цию списка задач (ToDoList). При вызове ф-ции или
инициализации класса, на странице должен формироваться HTML-шаблон
для работы со списком задач: название списка, поле ввода задачи, список
добавленных задач;
Дизайн приложения может быть любым. Вкратце о его работе:
 После инициализации класса (вызова ф-ции), на странице должен
появиться пустой список задач: только название списка и поле ввода
задачи.
 После ввода задачи и нажатии Enter, новая задача должна добавиться
под поле ввода или в конец существующего списка. Список в HTML
может быть создать любым способом (необязательно исп. <ul>).
 Возле каждой добавленной задачи должен быть «чекбокс»
(необязательно <input />), после нажатия на который текущая задача
должна зачеркиваться. При повторном нажатии по «чекбоксу» задача
должна снова стать активной.
Дополнительно (необязательно к выполнению): добавьте ф-цию
редактирования конкретной задачи через prompt, добавьте кнопку очистить
список.*/


window.addEventListener('load', function(){
//создаю отдельный контейнер в котором будет ToDoList
    let main_element = document.createElement('div');
        main_element.classList.add('list_box');
        document.querySelector('.container').appendChild(main_element);
//обозначаю нахождение кнопок
    let buttonAddTask = document.querySelector('.button_add'),
        buttonRemove = document.querySelector('.button_remove');
//создаю функционал ввода заданий
    let itemInput = document.createElement('input');
        itemInput.classList.add('add_task');
        document.querySelector('.list_box').appendChild(itemInput);
//показываю само поле ввода       
    let addTaskInto = document.querySelector('.add_task');
//работа с кнопками: 
//вызов поля ввода
    if (buttonAddTask && addTaskInto) buttonAddTask.addEventListener('click', function(event){
        addTaskInto.style.display  = 'block';
        addTaskInto.focus();
        addTaskInto.value = '';
    });
//скрытие поля ввода
    if (buttonAddTask && addTaskInto) document.addEventListener('keydown', function(event){
        if (event.code == 'Enter') addTaskInto.style.display = 'none';
    });
//получение информации и создание списка
    let info = {},
        toDoList = document.createElement('ol');
        document.querySelector('.list_box').appendChild(toDoList);    
//кнопка получения данных из поля ввода в список дел       
    itemInput.addEventListener('keydown', function(event){
        if (event.code != 'Enter') return;
        let toDoItem = document.createElement('li');
            document.querySelector('ol').appendChild(toDoItem);
        info = event.target.value;
        toDoItem.innerHTML = `<span>${info}</span>`;

        toDoItem.addEventListener('dblclick', function(event){
            this.querySelector('span').innerHTML = prompt('Введите новую запись');
            //перебором? 
         });
//функционал checkbox
    let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        toDoItem.appendChild(checkBox); 
    
        checkBox.addEventListener('change', function(event){
            if (this.checked == true) toDoItem.querySelector('span').style.textDecoration = 'line-through';
            else toDoItem.querySelector('span').style.textDecoration = 'none';
            
         })
    });
//редактирование записи (!решено неверно)
    
//кнопка удаления записей поштучно
    buttonRemove.addEventListener('click', function(event){
        let remove_elem = document.querySelector('li');
        remove_elem.remove();
    });   
});


