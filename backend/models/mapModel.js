class Map {
    constructor(id, name, quantity, nbplayer, availability) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.nbplayer = nbplayer;
        this.availability = availability;
    }
}

const mapList = [
    new Map(1, 'Space', 5, 0, true),
    new Map(2, 'Zombie', 6, 0, true),
    new Map(3, 'maap', 7, 0, false),
];

exports.getAll = () => mapList.map(map => ({...map }));
