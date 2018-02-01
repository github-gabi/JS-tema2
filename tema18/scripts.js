/* for (let i = String.fromCharCode(65); i < String.fromCharCode(93); i++) {
    $('#keysLetters').append('<div class="keys">' + String.fromCharCode(i) + '</div>')
} */

for (let i = 65; i < 94; i++) {
    var letters = String.fromCharCode(i);
    $('#keysLetters').append('<div class="keys">' + letters + '</div>')
}

for (let j = 0; j < 10; j++) {
    $('#keysNumbers').append('<div class="keys">' + j + '</div>')
}
