function checkCharacter() {
    let ch = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (ch == "") {
        result.innerHTML = "Please enter a character.";
    }
    else if (!/[a-z]/.test(ch)) {
        result.innerHTML = "Please enter a valid alphabet.";
    }
    else if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        result.innerHTML = ch.toUpperCase() + " is a Vowel.";
    }
    else {
        result.innerHTML = ch.toUpperCase() + " is a Consonant.";
    }
}