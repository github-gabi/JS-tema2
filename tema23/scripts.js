$(() => {
    let displayWidth = $('.displayNumbers').width();
    let displayHeight = $('.displayNumbers').height();

    displayRandomNumber();
});

function displayRandomNumber() {
    $('button.btn').click(displayNumbers);
}
const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};

function displayNumbers() {
    $('input').val();
}


    let randomTop = getRandomNumber(0, displayHeight);
    let randomLeft = getRandomNumber(0, displayWidth);

    let colorRed = getRandomNumber(0, 255);
    let colorGreen = getRandomNumber(0, 255);
    let colorBlue = getRandomNumber(0, 255);

    randomNumber.css({
        top: randomTop + 'px',
        left: randomLeft + 'px',

        color: `rgb(${colorRed}, ${colorGreen}, ${colorBlue}`,

        fontSize: randomNumber + 'px'
    });

};

