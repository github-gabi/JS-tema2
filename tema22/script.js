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