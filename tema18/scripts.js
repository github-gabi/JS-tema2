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
$('#keysLetters').append('<div class="keys backspace">' + '<' + '</div>');


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

    if (buttonText == '<') {
        removeLastCharFromDisplay();
        return;
    }
    
}



function appendToDisplay(char) {
    $('#display').append(char);
}

function removeLastCharFromDisplay() {
    let displayText = $('#display').text();
    let newText = displayText.substring(0, displayText.length - 1);
    $('#display').text(newText);
}