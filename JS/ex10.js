function invertCase (string) {
    let final = '';
    let i = 0;
    while (i < string.length) {
        let char = string.charAt(i);
        if (char == char.toUpperCase()) {
            char = char.toLowerCase();
        } else {
            char = char.toUpperCase();
        }

        i += 1;
        final += char; 
    }
    console.log(`${final}`)
    return final;
};

invertCase("Le Cochon jaune");