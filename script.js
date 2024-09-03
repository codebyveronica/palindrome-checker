const text = document.getElementById('text');

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const word = text.value;
    const reversed = reverseString(word);
    
    if(word == 0) {
        alert('Please, type a word.')
    } else if (word === reversed){
        alert('P A L I N D R O M E');
    } else {
        alert('Not today!');
    }

    text.value = '';
    text.focus();
}