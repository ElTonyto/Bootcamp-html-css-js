
function difference(tab1, tab2) { 
    let result = new Array(); 
    for (let i = 0; i < tab1.length; i++) { 
        if (tab2.indexOf(tab1[i]) === -1) { 
            result.push(tab1[i]); 
        } 
    } 
    for (let i = 0; i < tab2.length; i++) { 
        if (tab1.indexOf(tab2[i]) === -1) { 
            result.push(tab2[i]); 
        } 
    } 
    console.log(`${result}`)
    return result; 
}

let tab1 = new Array(1, 4, 6, 7, 8)
let tab2 = new Array(1, 4, 6, 5, 8, 5,8,74,4)
let tab3 = new Array()

console.log(`Exemple 1`)
difference(tab1, tab2)

console.log(`Exemple 2`)
difference(tab1, tab3)

console.log(`Exemple 3 (vides)`)
difference(tab3, tab3)

