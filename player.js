class Player {

    constructor() {
        this.life = 30;
        this.shield = 0;
        this.handcards = [];
    }

    say() {
        console.log('hi');
    }
}

exports.Player = Player;
