let displayWidth = 500;
let displayWheight = 400;


const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};

const randomPosition = (randomTop, randomLeft) => {
    let randomTop = getRandomNumber(0, `${displayWheight}`);
    let randomTop = getRandomNumber(0, 500);

    $('.changePozition').click(function () {
        $('.display i').css({ top: randomTop + 'px', left: randomLeft + 'px' });
    });
}