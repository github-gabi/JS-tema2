$(function() {
    createButtonEvents();
});



for (let i = 65; i < 97; i++) {
    var letters = String.fromCharCode(i);
    $('#keysLetters').append('<div class="keys">' + letters + '</div>');
}

for (let j = 0; j < 10; j++) {
    $('#keysNumbers').append('<div class="keys">' + j + '</div>');
}

$('#keysLetters').append('<div class="keys space">' + 'space' + '</div>');
$('#keysLetters').append('<div class="keys backspace">' + '&#8678;' + '</div>');


function createButtonEvents() {
    $('.keys').map((index, item) => {
        $(item).click(function() {
            grabChar($(this));
        });
    });
}

function grabChar(sender) {
    let buttonText = sender.text();
    appendToDisplay(buttonText);
    return;
}

function appendToDisplay(char) {
    $('#display').append(char);
}