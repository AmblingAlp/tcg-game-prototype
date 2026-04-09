class Deck {
    constructor() {
        this.cards = [];
    }

    // Add cards to the deck
    addCard(card) {
        this.cards.push(card);
    }

    // Shuffle the deck
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    // Draw a card from the deck
    drawCard() {
        if (this.cards.length === 0) {
            throw new Error('No cards left in the deck');
        }
        return this.cards.pop();
    }

    // Get the current number of cards
    size() {
        return this.cards.length;
    }
}

module.exports = Deck;
