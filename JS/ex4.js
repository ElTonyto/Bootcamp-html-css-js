function checkPalindrom(string) {
    let palindrom = false

    if (string == string.split('').reverse().join('')) {
        palindrom = true
    }

    console.log(`${string} : ${palindrom}`)
    return palindrom
}

checkPalindrom('kayak')
checkPalindrom('bonjour')