var lastName = prompt('Введите Фамилию'),
    firstName = prompt('Введите Имя'),
    surName = prompt('Введите Отчество'),
    age=parseInt(prompt('Введите возраст')),
    male=confirm('Ваш пол мужской?');

alert(`Ваше ФИО: ${lastName} ${firstName} ${surName}
Ваш возраст в годах: ${age}
Ваш возраст в днях:  ${parseInt(age*365)}
Через пять лет вам будет: ${parseInt(age+5)}
Ваш пол: ${(male==true)?'мужской':'женский'}
Вы на пенсии: ${(male == true && age > 60)?'да':(male == false && age > 55)?'да':'нет'}`);

/*
if (male==true) {
    c='мужской';
    if (age > 60) {
        d = 'да';
    } else {
        d= 'нет'
    }
} else {
    c='женский';
    if (age > 55) {
        d = 'да';
    } else {
        d= 'нет'
    }
}
alert(`Ваше ФИО: ${lastName} ${firstName} ${surName}
Ваш возраст в годах: ${age}
Ваш возраст в днях:  ${parseInt(age*365)}
Через пять лет вам будет: ${parseInt(age+5)}
Ваш пол: ${c} 
Вы на пенсии: ${d}`);
*/
