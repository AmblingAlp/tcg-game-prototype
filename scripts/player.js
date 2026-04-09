class Player {
    constructor() {
        this.hand = [];
        this.activeCard = null;
        this.hp = 100; // Default HP
        this.actions = [];
    }

    // Method to draw a card from the deck
    drawCard(card) {
        this.hand.push(card);
    }

    // Method to play a card
    playCard(cardIndex) {
        if (this.hand[cardIndex]) {
            this.activeCard = this.hand.splice(cardIndex, 1)[0];
            this.actions.push(`Played card: ${this.activeCard}`);
        } else {
            console.log('No card at this index.');
        }
    }

    // Method to take damage
    takeDamage(amount) {
        this.hp -= amount;
        this.actions.push(`Took damage: ${amount}. Remaining HP: ${this.hp}`);
    }

    // Method to heal
    heal(amount) {
        this.hp += amount;
        this.actions.push(`Healed for: ${amount}. Current HP: ${this.hp}`);
    }

    // Method to get player status
    getStatus() {
        return {
            hand: this.hand,
            activeCard: this.activeCard,
            hp: this.hp,
            actions: this.actions
        };
    }
}

module.exports = Player;