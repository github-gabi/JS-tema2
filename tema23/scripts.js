let displayWidth = $('.displayNumbers').width();
let displayHeight = $('.displayNumbers').height();


const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};

const displayRandomNumber = () => {
    //let randomNumber = getRandomNumber(1, number);
    const number = $('input').val();

    const spreadNumbers = () => {
        randomNumber.map(element => {
            $('.displayNumbers').append(element);
        });
    };

    let randomTop = getRandomNumber(0, displayHeight);
    let randomLeft = getRandomNumber(0, displayWidth);

    let colorRed = getRandomNumber(0, 255);
    let colorGreen = getRandomNumber(0, 255);
    let colorBlue = getRandomNumber(0, 255);

    randomNumber.css({
        top: randomTop + 'px',
        left: randomLeft + 'px',

        color: rgb(colorRed, colorGreen, colorBlue),

        fontSize: randomNumber + 'px'
    });

};

$('button.btn').click(displayRandomNumber);