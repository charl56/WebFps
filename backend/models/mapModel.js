class Map {
    constructor(id, name, quantity, nbplayer, availability, color) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.nbplayer = nbplayer;
        this.availability = availability;
        this.users = [];
        this.color = color;
    }
}

const mapList = [
    new Map(1, 'Space', 5, 0, true, "#4A919E"),
    new Map(2, 'Zombie', 5, 0, true, "#DA7B27"),
];

module.exports = {
    Map,
    mapList
};
