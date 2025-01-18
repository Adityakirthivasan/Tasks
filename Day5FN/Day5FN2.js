function checkVowel(l) {
    switch (l.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(l + " is a vowel.");
            break;
        default:
            console.log(l + " is not a vowel.");
    }
}


checkVowel('a');  
checkVowel('b');  