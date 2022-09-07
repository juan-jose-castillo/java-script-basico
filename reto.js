let jugador = '', cpu = '', res = '';
function jugar(jugador, cpu) {
    if (jugador == cpu) {
        res = 'Empataste!'
    } else if (jugador == 'papel') {
        jugador == 'papel' && cpu == 'piedra' ? res = 'ganaste' : res = 'perdiste';
    } else if (jugador == 'piedra') {
        jugador == 'piedra' && cpu == 'tijera' ? res = 'ganaste' : res = 'perdiste';
    } else {
        jugador == 'tijera' && cpu == 'papel' ? res = 'ganaste' : res = 'perdiste';
    } return res;
}
jugar('papel', 'piedra');


//piedra
//papel
//tijera

let jugador = '', cpu = '', res = '';
function jugar(jugador, cpu) {
    switch (jugador) {
        case 'papel':
            jugador == 'papel' && cpu == 'piedra' ? res = 'ganaste' : res = 'perdiste';
            break;
        case 'piedra':
            jugador == 'piedra' && cpu == 'tijera' ? res = 'ganaste' : res = 'perdiste';
            break;
        case 'tijera':
            jugador == 'tijera' && cpu == 'papel' ? res = 'ganaste' : res = 'perdiste';
            break;
        default:
            res = 'Empataste!'
            break;
    }
    return res;
}
jugar('papel', 'piedra'); 