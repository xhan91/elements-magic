const _ = require('lodash');
const SUITS = {SPADE: 'Spade', HEART: 'Heart', DIAMOND: 'Diamond', CLUB: 'Club'};


class Deck {
    constructor() {
        this.init();
    }

    init() {
        this.cards = [];
        Object.keys(SUITS).forEach((key)=>{
            for (let i = 1; i < 14; i++) {
                let card = {
                    suit: SUITS[key],
                    number: i
                };
                this.cards.push(card);
            }
        });
        this.cards.push({suit: 'Joker', number: 1});
        this.cards.push({suit: 'Joker', number: 0});
    }

    shuffle() {
        this.cards = _.shuffle(this.cards);
    }

    show() {
        console.log(this.cards);
    }
}

exports.Deck = Deck;
exports.SUITS = SUITS;
