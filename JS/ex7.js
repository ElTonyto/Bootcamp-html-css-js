function deleteAt (string, index) {
    let before = string.substring(0, index-1)
    let after = string.substring(index, string.length)

    let final = before + after

    console.log(`${final}`)
    return final
}

let string = 'Bouteille'
deleteAt(string, 5 )