function nextChar(string) {
    let final = new String

    for (let i=0; i<string.length; i++) {

        final += String.fromCharCode(string.charAt(i).charCodeAt(0) + 1);

    }
    console.log(`${final}`)
}
nextChar('abcdefg');