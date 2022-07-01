//second hand
const secondHand = document.querySelector('.second-hand');

//minutes
const minsHand = document.querySelector('.min-hand');

//hoursHand
const hourHand = document.querySelector('hour-hand');

function setDate() {
    // console.log('Hello');
    //date
    const now = new Date();

    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    //60/60 = 1   and 1 multiply 360 = 360 which will be eventually 360deg.

    //for default top to bottom instead of right and left.
    // adding 90 in secondsDegrees will overRight the css transform: rotate(90deg).

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    // console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    //hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // console.log(mins);
}

setInterval(setDate, 1000);