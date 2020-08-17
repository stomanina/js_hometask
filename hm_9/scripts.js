/*1. Напишите ф-цию отправки различных уведомлений, например: уведомл.
об успешной отправки формы, приветственное сообщение или сообщение об
ошибке. Ф-ция должна приниматься сл. параметры: тип сообщения (type:
error, alert, msg), текст сообщения (string). После вызова ф-ции в HTML-
документе должно появится сообщение (<div>) соответствующего типа, и

спустя 5 секунд должно пропадать. Каждый тип сообщения должен
отличатся по стилю, например: фоновым цветом и шрифтом.

2. Усовершенствуйте ф-цию уведомлений. Сделайте так, чтобы ф-ция
автоматически вызывалась и показывала уведомление в зависимости от
переданного параметра через URL, например, при переходе по ссылке с
параметром:
 ?alert=form-error – показывается сообщение об ошибке отправки формы
(тип error);
 ?alert=form-sent – сообщение об успешной отправки формы (тип alert)
 ?alert=hello – «Добро пожаловать на сайт!» (тип msg)
 ?alert=msg-sent – «Вам письмо!» (тип alert)
 ?alert=... и т.д.
Вы можете придумать свои параметры. Для получения параметров из URL
обратитесь к соответствующему методу Location. Если параметр не передан,
либо с пустым или неверным значением, то никаких сообщений не
показывается.*/

// то, что было на стиме(как пример для себя)

/*let add_message = function (message){
    if(!message) return false;
    let elem_message = document.createElement('div');
    elem_message.classList.add('message');
    elem_message.innerHTML = message;

    document.querySelector('.message_box').appendChild(elem_message);

    setTimeout(function() {
        elem_message.remove();
    }, 5000);
}
let message = decodeURIComponent(window.location.search).split('=')[1].replace('+', ' ');

add_message(message);
*/

let add_message = function(type, string){
    
    let elem_message = document.createElement('div');
    document.querySelector('.message_box').appendChild(elem_message);
    elem_message.innerHTML = string;
    
    switch(type){
        case ('error'):
            elem_message.classList.add('error');
        break;
        case ('alert'):
            elem_message.classList.add('alert');
        break;
        case ('msg'):
            elem_message.classList.add('msg');
        break;
    }
    
    setTimeout(function() {
        elem_message.remove();
    }, 5000);
}

//add_message('msg', 'Приветствую!');
//add_message('alert', 'Сообщение отправлено!');
//add_message('error', 'Ошибка!');


// не могу разобраться во второй части
/*function get_adress(){
    let url = decodeURIComponent(window.location.search.split('&'));
    console.log(url);
    
        type = url[0].split('=')[0],
        massage = url[1].split('=')[0];

    add_message(url[0].split('=')[1], url[1].split('=')[1]);
}
*/

