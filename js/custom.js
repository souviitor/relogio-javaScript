const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const dateVisor = document.querySelector('.date-visor');

const getTime = () => {
    const date = new Date();

    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        dateS: date.toLocaleDateString('pt-BR', { weekday: 'long' }),
        dateN: date.getDate()
    };
}

setInterval(()=> {

    const { second, minute, hour, dateN } = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${second * 6}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minute * 6}deg)`
    hourHand.style.transform = `translate(0, -50%) rotate(${hour * 30}deg)`
    
    dateVisor.textContent = getTime().dateN
;}, 1000 );