/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance.
See the Fighter class below in your chosen language.

Both health and damagePerAttack will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
*/

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

// Lew win
declareWinner(
    new Fighter("Harry", 5, 4),
    new Fighter("Lew", 10, 2), 'Lew');

// Harry win
declareWinner(
    new Fighter("Lew", 10, 2),
    new Fighter("Harry", 5, 4), 'Harry');

function declareWinner(fighter1, fighter2, firstAttacker) {
    let i = 0;

    if (firstAttacker === fighter1.name) {
        i = 1;
    }

    for (i; (fighter1.health > 0) && (fighter2.health > 0); i++) {
        if (i % 2 === 0) {
           console.log(fighter2.name, 'hit', fighter1.name, fighter1.health -= fighter2.damagePerAttack)
        } else {
            console.log(fighter1.name, 'hit', fighter2.name, fighter2.health -= fighter1.damagePerAttack)
        }
    }

    if (fighter1.health > 0) {
        return console.log('Winner is', fighter1.name);
    } else {
        return console.log('Winner is', fighter2.name);
    }
}
