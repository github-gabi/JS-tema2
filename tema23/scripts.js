let displayWidth = 540;
let displayHeight = 275;


const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};

const displayRandomNumber = () => {
    let randomNumber = getRandomNumber(1, number);
    const number = $('input').val();

    const spreadNumbers = () => {
        randomNumber.map(element => {
            $('.displayNumbers').append(element);
        });
    };


};

$('button.btn').click(displayRandomNumber);