console.log("");
console.log("ЗАДАНИЕ №7");

var zadacha_5 = "аннуитетный платеж равен:"; /*наконец-то экономическое образование пригодилось,
а то я все время ждала, когда же уже оно нужно будет)))*/
    S = 2000000; //сумма кредита
    Y = 5; //срок кредитования 5 лет или 60 месяцев
    Ym = 60;
    P = 0.1; //ставка годовая. месячная = 0.1/100/12 = 0,0008333
    Pm = 0.1/100/12;
    Pereplata = S*(Pm/(1-((1-Pm)^(-60))))*Ym; /*сумма кредита умножается на отношение месячной ставки процента и условия -
    1-(1-месячная стака в отрицательной степени равной сроку кредитования в месяцах. и все это умножается на количество месяцев кредитования */
console.log(zadacha_5+Pereplata); 
