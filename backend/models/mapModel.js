class Map {
    constructor(id, name, quantity, nbplayer, availability) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.nbplayer = nbplayer;
        this.availability = availability;
        this.users = [];
    }
}

const mapList = [
    new Map(1, 'Space', 5, 0, true),
    new Map(2, 'Zombie', 5, 0, true),
];

module.exports = {
    Map,
    mapList
};
