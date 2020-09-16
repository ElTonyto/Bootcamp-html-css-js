let tab = new Array(1,4,6,3,13,23,56,67,44,65)

for ( let i = 1; i <= tab.length; i++){
    if (tab[i] % 2 === 0) {
        console.log(` ${tab[i]} est pair \n`)
    } else {
        console.log(` ${tab[i]} est impair \n`)

    }
}