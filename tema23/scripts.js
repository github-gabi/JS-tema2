/*$(() => {

    $('.btn').click(function () {
        spreadNumbers();
    });

});

function spreadNumbers() {
    $('.displayNumbers').append(parseInt($('input').val()));
}

*/

 $(() => {
    let displayWidth = $('.displayNumbers').width();
    let displayHeight = $('.displayNumbers').height();

    $('.btn').click(function () {
        spreadNumbers();
    });
});

let inputNumber = parseInt($('input').val());

const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};

const spreadNumbers = () => {

    for (let i = 0; i <= inputNumber; i++) {

        $('.displayNumbers').append("<span class='numbers'>inputNumber[i]</span>" + 1)

        let randomTop = getRandomNumber(0, displayHeight);
        let randomLeft = getRandomNumber(0, displayWidth);

        let colorRed = getRandomNumber(0, 255);
        let colorGreen = getRandomNumber(0, 255);
        let colorBlue = getRandomNumber(0, 255);

        let changeFontSize = getRandomNumber(0, inputNumber);

        inputNumber.css({
            top: randomTop + 'px',
            left: randomLeft + 'px',

            color: `rgb(${colorRed}, ${colorGreen}, ${colorBlue}`,

            fontSize: randomNumber + 'px'
        });

    }

};



