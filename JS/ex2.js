let user = new Object()

user.name = "Bob"
user.description = ""
user.budget = 120


function budget(user) {
    if (user.budget === null || user.budget === undefined) {
        user.description = 'Tu as oublié ton portefeuille'
    }
    else if ( user.budget >= 0 && user.budget < 5){
        user.description = 'Il fallait travailler cet été'
    }
    else if ( user.budget === 5){
        user.description = 'Tu as le droit à une bière'
    }
    else {
        user.description = 'Tu payes ta tournée'
    }

    console.log(`Bravo ${user.name}, \n${user.description} \nPour rappel, votre budget est : ${user.budget}`)
}



budget(user)
