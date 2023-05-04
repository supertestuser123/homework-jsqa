//task 1

function kolobok(name){
    switch(name) {
        case 'дедушка': 
            console.log('Я от дедушки ушёл');
            break;
        case 'заяц': 
            console.log('Я от зайца ушёл');
            break;
        case 'лиса': 
            console.log('Меня съели');
            break
        default:
            console.log('Колобок никого не встретил');
    }
}

kolobok('дедушка');
kolobok('заяц');
kolobok('лиса');
kolobok();




