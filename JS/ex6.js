function fusion(tab, sep) {

    var string = new String()
    for (let i = 0; i < tab.length; i++) {
        string += tab[i] + sep
    }
    console.log(`${string}`)
    return string
}

let tab = new Array('Bonjour', 'tout', 'le', 'monde')
let sep = ','

fusion(tab,sep)