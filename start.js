const _ = require('lodash');

const Player = require('./player').Player;
const Deck = require('./cards').Deck;

player1 = new Player();
player2 = new Player();
deck = new Deck();

deck.show();
deck.shuffle();
deck.show();
