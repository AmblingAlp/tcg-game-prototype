class Card {
    constructor(name, hp, type, attacks) {
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.attacks = attacks;
    }

    displayCardInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`HP: ${this.hp}`);
        console.log(`Type: ${this.type}`);
        console.log(`Attacks: ${this.attacks.join(', ')}`);
    }
}

// Example usage:
const card = new Card('Fire Dragon', 150, 'Fire', ['Flame Breath', 'Fire Spin']);
card.displayCardInfo();