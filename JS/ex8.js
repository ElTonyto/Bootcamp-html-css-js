function biggest (a,b,c) {
    if (a > b && a > c) {
        console.log(`${a} est le plus grand`)
    } else if (b>a && b>c) {
        console.log(`${b} est le plus grand`)
    } else if (c>a && c>b) {
        console.log(`${c} est le plus grand`)
    } else {
        console.log(`Il y a deux nombre égaux`)
    }
}

let a = 30
let b = 30
let c = 6

biggest(a,b,c)