for (let j = 0; j < 10; j++) {
    $('main').append('<div class="keysLetters>' + j + '</div>')
}

for (let i = String.fromCharCode(65); i < String.fromCharCode(93); i++) {
    $('.keysLetters').append('<div class="keysNumbers>' + i + '</div>')
}