let sceneItems = {
    ////////
    // Floor
    ////////
    floor: {
        obj: './static/Models/kenney_space-kit/Models/terrain.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/terrain.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 70,
        scale_physic: {
            x: 100,
            y: 1,
            z: 100,
        },                    // Echelle de l'item 
        hitBoxPosition: {
            x: 0,
            y: 0,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    // Centre
    hangar_roundB_1: {
        obj: './static/Models/kenney_space-kit/Models/hangar_roundB.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/hangar_roundB.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 0.01,
            z: 0,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 1,
        scale_physic: {
            x: 2,
            y: 3,
            z: 2,
        },                    // Echelle de l'item 
        hitBoxPosition: {
            x: 0,
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    ////////////////
    // Monorails est
    ////////////////
    monorail_trainBox_1_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 15,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 15,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainBox_2_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 20,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 20,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainBox_3_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 15,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 15,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainBox_4_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 20,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 20,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainFront_1_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainFront.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainFront.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 10,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: 10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainFront_2_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainFront.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainFront.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 10,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: 10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainEnd_1_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainEnd.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainEnd.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 25,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: 25,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainEnd_2_est: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainEnd.obj',      // Item
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainEnd.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 25,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: 25,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // Monorails west
    //////////////////
    monorail_trainBox_1_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',
        mesh: null,
        position: {
            x: 6,
            y: 0.01,
            z: -15, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: -15, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainBox_2_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',
        mesh: null,
        position: {
            x: 6,
            y: 0.01,
            z: -20, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: -20, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainBox_3_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',
        mesh: null,
        position: {
            x: -6,
            y: 0.01,
            z: -15, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: -15, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainBox_4_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',
        mesh: null,
        position: {
            x: -6,
            y: 0.01,
            z: -20, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: -20, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainFront_1_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainFront.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainFront.mtl',
        mesh: null,
        position: {
            x: 6,
            y: 0.01,
            z: -10, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: -10, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainFront_2_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainFront.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainFront.mtl',
        mesh: null,
        position: {
            x: -6,
            y: 0.01,
            z: -10, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: -10, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainEnd_1_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainEnd.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainEnd.mtl',
        mesh: null,
        position: {
            x: 6,
            y: 0.01,
            z: -25, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: -25, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainEnd_2_west: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainEnd.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainEnd.mtl',
        mesh: null,
        position: {
            x: -6,
            y: 0.01,
            z: -25, // Adjusted for west side
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 2,
            y: 10,
            z: 4,
        },
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: -25, // Adjusted for west side
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // Monorails north
    //////////////////
    monorail_trainBox_1_north: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',
        mesh: null,
        position: {
            x: -18, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2, // Rotate to face north
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 4,
            y: 10,
            z: 2,
        },
        hitBoxPosition: {
            x: -18, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainFront_1_north: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainFront.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainFront.mtl',
        mesh: null,
        position: {
            x: -13, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2, // Rotate to face north
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 4,
            y: 10,
            z: 2,
        },
        hitBoxPosition: {
            x: -13, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainEnd_1_north: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainEnd.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainEnd.mtl',
        mesh: null,
        position: {
            x: -23, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2, // Rotate to face north
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 4,
            y: 10,
            z: 2,
        },
        hitBoxPosition: {
            x: -23, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // Monorails sud
    //////////////////
    monorail_trainBox_1_sud: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainBox.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainBox.mtl',
        mesh: null,
        position: {
            x: 18, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: -Math.PI / 2, // Rotate to face north
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 4,
            y: 10,
            z: 2,
        },
        hitBoxPosition: {
            x: 18, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainFront_1_sud: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainFront.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainFront.mtl',
        mesh: null,
        position: {
            x: 13, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: -Math.PI / 2, // Rotate to face north
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 4,
            y: 10,
            z: 2,
        },
        hitBoxPosition: {
            x: 13, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    monorail_trainEnd_1_sud: {
        obj: './static/Models/kenney_space-kit/Models/monorail_trainEnd.obj',
        mtl: './static/Models/kenney_space-kit/Models/monorail_trainEnd.mtl',
        mesh: null,
        position: {
            x: 23, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: -Math.PI / 2, // Rotate to face north
            z: 0,
        },
        scale_threejs: 5,
        scale_physic: {
            x: 4,
            y: 10,
            z: 2,
        },
        hitBoxPosition: {
            x: 23, // Adjusted for north side
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // rocket sud west
    //////////////////
    rocket_baseA_sud_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_baseA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_baseA.mtl',
        mesh: null,
        position: {
            x: -15,
            y: 0.01,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15,
            y: 0.01,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_fuelA_sud_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_fuelA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_fuelA.mtl',
        mesh: null,
        position: {
            x: -15,
            y: 3,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15,
            y: 3,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_sidesA_sud_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_sidesA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_sidesA.mtl',
        mesh: null,
        position: {
            x: -15,
            y: 4.5,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15,
            y: 4.5,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_finsA_sud_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_finsA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_finsA.mtl',
        mesh: null,
        position: {
            x: -15,
            y: 7.5,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15,
            y: 7.5,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_topA_sud_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_topA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_topA.mtl',
        mesh: null,
        position: {
            x: -15,
            y: 9.5,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15,
            y: 9.5,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // rocket sud east
    //////////////////
    rocket_baseA_sud_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_baseA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_baseA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for south-east
            y: 0.01,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for south-east
            y: 0.01,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_fuelA_sud_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_fuelA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_fuelA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for south-east
            y: 3,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for south-east
            y: 3,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_sidesA_sud_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_sidesA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_sidesA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for south-east
            y: 4.5,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for south-east
            y: 4.5,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_finsA_sud_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_finsA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_finsA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for south-east
            y: 7.5,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for south-east
            y: 7.5,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_topA_sud_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_topA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_topA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for south-east
            y: 9.5,
            z: -10,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for south-east
            y: 9.5,
            z: -10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // rocket nord east
    //////////////////
    rocket_baseA_nord_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_baseA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_baseA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for north-east
            y: 0.01,
            z: 10, // Adjusted for north-east
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for north-east
            y: 0.01,
            z: 10, // Adjusted for north-east
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_fuelA_nord_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_fuelA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_fuelA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for north-east
            y: 3,
            z: 10, // Adjusted for north-east
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for north-east
            y: 3,
            z: 10, // Adjusted for north-east
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_sidesA_nord_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_sidesA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_sidesA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for north-east
            y: 4.5,
            z: 10, // Adjusted for north-east
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for north-east
            y: 4.5,
            z: 10, // Adjusted for north-east
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_finsA_nord_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_finsA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_finsA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for north-east
            y: 7.5,
            z: 10, // Adjusted for north-east
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for north-east
            y: 7.5,
            z: 10, // Adjusted for north-east
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_topA_nord_east: {
        obj: './static/Models/kenney_space-kit/Models/rocket_topA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_topA.mtl',
        mesh: null,
        position: {
            x: 15, // Adjusted for north-east
            y: 9.5,
            z: 10, // Adjusted for north-east
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: 15, // Adjusted for north-east
            y: 9.5,
            z: 10, // Adjusted for north-east
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // rocket nord west
    //////////////////
    rocket_baseA_nord_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_baseA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_baseA.mtl',
        mesh: null,
        position: {
            x: -15, // Adjusted for north-west
            y: 0.01,
            z: 10, // Adjusted for north-west
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15, // Adjusted for north-west
            y: 0.01,
            z: 10, // Adjusted for north-west
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_fuelA_nord_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_fuelA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_fuelA.mtl',
        mesh: null,
        position: {
            x: -15, // Adjusted for north-west
            y: 3,
            z: 10, // Adjusted for north-west
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15, // Adjusted for north-west
            y: 3,
            z: 10, // Adjusted for north-west
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_sidesA_nord_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_sidesA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_sidesA.mtl',
        mesh: null,
        position: {
            x: -15, // Adjusted for north-west
            y: 4.5,
            z: 10, // Adjusted for north-west
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15, // Adjusted for north-west
            y: 4.5,
            z: 10, // Adjusted for north-west
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_finsA_nord_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_finsA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_finsA.mtl',
        mesh: null,
        position: {
            x: -15, // Adjusted for north-west
            y: 7.5,
            z: 10, // Adjusted for north-west
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15, // Adjusted for north-west
            y: 7.5,
            z: 10, // Adjusted for north-west
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    rocket_topA_nord_west: {
        obj: './static/Models/kenney_space-kit/Models/rocket_topA.obj',
        mtl: './static/Models/kenney_space-kit/Models/rocket_topA.mtl',
        mesh: null,
        position: {
            x: -15, // Adjusted for north-west
            y: 9.5,
            z: 10, // Adjusted for north-west
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {
            x: 3,
            y: 10,
            z: 3,
        },
        hitBoxPosition: {
            x: -15, // Adjusted for north-west
            y: 9.5,
            z: 10, // Adjusted for north-west
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    //////////////////
    // corridor
    //////////////////
    corridor_1: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_2: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: 6,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: 6,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_3: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: 12,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: 12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_4: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: 18,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: 18,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_5: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: 24,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: 24,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_6: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: 30,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: 30,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_7: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -26,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -26,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_8: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -20,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -20,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_9: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -14,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -14,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_10: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -8,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -8,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_11: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -2,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -2,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_12: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 4,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 4,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_13: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 10,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 10,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_14: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 16,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 16,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_15: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 22,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 22,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_16: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 28,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 28,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_17: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 36,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_18: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 30,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 30,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_19: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 24,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 24,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_20: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 18,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 18,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_21: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 12,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_22: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 6,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 6,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_23: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: 0,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_24: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: -6,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: -6,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_25: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: -12,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: -12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_26: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: -18,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: -18,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_27: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: -24,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: -24,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_28: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: -30,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: -30,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_29: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 32,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 32,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_30: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 26,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 26,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_31: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 20,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 20,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_32: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 14,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 14,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_33: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 8,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 8,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_34: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: 2,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: 2,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_35: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -4,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -4,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_36: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -10,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -10,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_37: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -16,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -16,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_38: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -22,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -22,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_39: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -28,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -28,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_40: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: -36,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -36,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_41: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: -30,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -30,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_42: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: -24,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -24,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_43: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: -18,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -18,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_44: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: -12,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    corridor_45: {
        obj: './static/Models/kenney_space-kit/Models/corridor.obj',
        mtl: './static/Models/kenney_space-kit/Models/corridor.mtl',
        mesh: null,
        position: {
            x: -32,
            y: 0.01,
            z: -6,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 40,
            z: 5,
        },
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -6,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    /////////////
    ////
    ////////////
    craft_cargoB_1: {
        obj: './static/Models/kenney_space-kit/Models/craft_speederB.obj',
        mtl: './static/Models/kenney_space-kit/Models/craft_speederB.mtl',
        mesh: null,
        position: {
            x: -40,
            y: 8,
            z: 12,
        },
        rotation: {
            x: 0,
            y: Math.PI / 3,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 2,
            z: 5,
        },
        hitBoxPosition: {
            x: -40,
            y: 8,
            z: 12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    craft_cargoB_2: {
        obj: './static/Models/kenney_space-kit/Models/craft_speederB.obj',
        mtl: './static/Models/kenney_space-kit/Models/craft_speederB.mtl',
        mesh: null,
        position: {
            x: -30,
            y: 8,
            z: 0,
        },
        rotation: {
            x: 0,
            y: Math.PI / 3,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {
            x: 5,
            y: 2,
            z: 5,
        },
        hitBoxPosition: {
            x: -40,
            y: 8,
            z: 12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },




    
}



let spawnsCoord = {
    1: {
        x: -25,
        y: 5,
        z: -25,
    },
    2: {
        x: 0,
        y: 5,
        z: -26,
    },
    3: {
        x: 25,
        y: 5,
        z: -25,
    },
    4: {
        x: 25,
        y: 5,
        z: 25,
    },
    5: {
        x: 26,
        y: 5,
        z: 0,
    },
    6: {
        x: -25,
        y: 5,
        z: 25,
    },
}

let weaponsCoord = {
    shotgun: {
        position: {
            x: 23,
            y: 1.7,
            z: 9,
        },
        rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale: 15,
        light: {
            x: 23,
            y: 1.7,
            z: 9,
        }
    },
    uzi: {
        position: {
            x: 10,
            y: 1.7,
            z: 23
        }, rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale: 15,
        light: {
            x: 10,
            y: 1.7,
            z: 23,
        }
    },
    machinegun: {
        position: {
            x: -21,
            y: 1.7,
            z: 9,
        }, rotation: {
            x: 0,
            y: Math.PI / 2,
            z: 0,
        },
        scale: 15,
        light: {
            x: -21,
            y: 1.7,
            z: 9,
        }
    },
}


export { sceneItems }             // Elements du décors, avec leur position
export { spawnsCoord }            // Coordoonées des spawns de la map
export { weaponsCoord }           // Coordonées des empalcements des armes sur les murs