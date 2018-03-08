let displayWidth = 450;
let displayHeight = 400;


const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};

const randomPosition = () => {
    let smileyWidth = $('i').width();
    let smileyHeight = $('i').height();

    let randomTop = getRandomNumber(0, displayHeight - smileyHeight);
    let randomLeft = getRandomNumber(0, displayWidth - smileyWidth);

    $('.display i').css({
        top: randomTop + 'px',
        left: randomLeft + 'px'
    });
};

$('.changePosition').click(randomPosition);

const randomColor = () => {
    let colorRed = getRandomNumber(0, 255);
    let colorGreen = getRandomNumber(0, 255);
    let colorBlue = getRandomNumber(0, 255);

    $('.display i').css("color", `rgb(${colorRed}, ${colorGreen}, ${colorBlue}`);
};

$('.changeColor').click(randomColor);

const randomSize = () => {
    let fontSizechanged = getRandomNumber(10, 20);

    $('.display i').css('font-size', fontSizechanged + 'vw');
};

$('.changeSize').click(randomSize);