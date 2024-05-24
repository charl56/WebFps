let sceneItems = {
    //////////
    // Routes
    //////////
    // Centre
    roadCrossRoad1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 0,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        },                    // Echelle de l'item 
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: 0,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadCrossRoad2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: 6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 10,
            y: 0.01,
            z: 10,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadCrossRoad3: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 0.01,
            z: 0,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
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
    roadCrossRoad4: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_cornerOuter.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 0.01,
            z: 6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 0,
            y: 0.01,
            z: 6,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    // Cotés
    roadAsphalt_straight1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 12,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 12,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 18,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 18,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight2_1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 24,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 24,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight2_2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 30,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 30,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight3: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight4: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -12,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 15,
            y: 0.01,
            z: 15,
        }, 
        hitBoxPosition: {
            x: -12,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight4_1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -18,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -18,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight4_2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -24,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -24,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight4_3: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -30,
            y: 0.01,
            z: 3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -30,
            y: 0.01,
            z: 3,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight5: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: -6,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight6: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: -12,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: -12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight6_1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: -18,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: -18,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0,
        }
    },
    roadAsphalt_straight6_2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: -24,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: -24,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_straight7: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: 12,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: 12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_straight8: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: 18,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: 18,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_straight8_1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: 24,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: 24,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_straight8_2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_straight.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_straight.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: 30,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: 30,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_pavement1: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.3,
            z: 12,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -6,
            y: 0.3,
            z: 12,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_pavement2: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 24,
            y: 0.3,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 24,
            y: 0.3,
            z: -5,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_pavement3: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 30,
            y: 0.3,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: 30,
            y: 0.3,
            z: -5,
        },
        hitBox: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    roadAsphalt_pavement4: {
        obj: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadAsphalt_pavement.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -12,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -6
        },
        hitBox: {
            x: 6,
            y: 0,
            z: 6
        }
    },
    ////////
    // Terre
    ////////
    RoadDirt_center1: {
        obj: './static/Models/Retro_Urban/Models/roadDirt_center.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadDirt_center.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -26,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -26,
            y: 0.01,
            z: -6
        },
        hitBox: {
            x: 6,
            y: 0,
            z: 6
        }
    },
    RoadDirt_center2: {
        obj: './static/Models/Retro_Urban/Models/roadDirt_center.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/roadDirt_center.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -32,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 10,
            y: 0.01,
            z: 10,
        }, 
        hitBoxPosition: {
            x: -32,
            y: 0.01,
            z: -6
        },
        hitBox: {
            x: 6,
            y: 0,
            z: 6
        }
    },
    ////////////
    // Batiments
    ////////////
    WallA_Window1: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -25,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -25,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Window2: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: 19,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: 19,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Window3: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: 15,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: 15,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Window4: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 19,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 19,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Window5: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: -9,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: -9,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Window6: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -5,
            y: 0.01,
            z: -11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -5,
            y: 0.01,
            z: -11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Window7: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -5,
            y: 0.01,
            z: -15,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -5,
            y: 0.01,
            z: -15,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA1: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -21,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -21,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Door1: {
        obj: './static/Models/Retro_Urban/Models/wallA_door.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_door.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -17,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -17,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Door2: {
        obj: './static/Models/Retro_Urban/Models/wallA_door.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_door.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 27,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 27,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Door3: {
        obj: './static/Models/Retro_Urban/Models/wallA_door.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_door.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: -17,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: -17,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA2: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -13,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -13,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA3: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -9,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -9,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA4: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -21,
            y: 0.01,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -21,
            y: 0.01,
            z: -5,
        },
        hitBox: {
            x: 2,
            y: 60,
            z: 2,
        }
    },
    WallA5: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -21,
            y: 0.01,
            z: -9,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -21,
            y: 0.01,
            z: -9,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA6: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -17,
            y: 0.01,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -17,
            y: 0.01,
            z: -5,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA7: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -4,
            y: 0.01,
            z: 16,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -4,
            y: 0.01,
            z: 16,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA8: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -4,
            y: 0.01,
            z: 20,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -4,
            y: 0.01,
            z: 20,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA9: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -4,
            y: 0.01,
            z: 24,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -4,
            y: 0.01,
            z: 24,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA10: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -4,
            y: 0.01,
            z: 28,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -4,
            y: 0.01,
            z: 28,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA11: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA12: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: 29,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA13: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 15,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 15,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA14: {
        obj: './static/Models/Retro_Urban/Models/wallA_window.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_window.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 19,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 19,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA15: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 23,
            y: 0.01,
            z: 11,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 23,
            y: 0.01,
            z: 11,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA17: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 19,
            y: 0.01,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 19,
            y: 0.01,
            z: -5,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA18: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 15,
            y: 0.01,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 15,
            y: 0.01,
            z: -5,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA19: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 23,
            y: 0.01,
            z: -9,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 23,
            y: 0.01,
            z: -9,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA20: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 27,
            y: 0.01,
            z: -9,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 27,
            y: 0.01,
            z: -9,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA21: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 31,
            y: 0.01,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 31,
            y: 0.01,
            z: -5,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA22: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: -5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: -5,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA23: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: -13,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: -13,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA24: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -5,
            y: 0.01,
            z: -19,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -5,
            y: 0.01,
            z: -19,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA25: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: -21,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: -21,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA26: {
        obj: './static/Models/Retro_Urban/Models/wallA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -5,
            y: 0.01,
            z: -23,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: -5,
            y: 0.01,
            z: -23,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Garage1: {
        obj: './static/Models/Retro_Urban/Models/wallA_garage.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_garage.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -12,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 4.2,
            y: 15,
            z: 4.2,
        },         
        hitBoxPosition: {
            x: -12,
            y: 0.01,
            z: -6,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    WallA_Garage2: {
        obj: './static/Models/Retro_Urban/Models/wallA_garage.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_garage.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -7,
            y: 0.01,
            z: 14,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/4,
            z: 0,
        },
        scale_threejs: 7,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        },
        hitBoxPosition: {
            x: -7,
            y: 0.01,
            z: 14,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    /////////
    // Angles
    /////////
    wallA_corner1: {
        obj: './static/Models/Retro_Urban/Models/wallA_corner.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallA_corner.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: 21,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: 21,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    ///////////
    // Escalier
    ///////////
    wallB_roofSlantDetailed1: {
        obj: './static/Models/Retro_Urban/Models/wallB_roofSlantDetailed.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallB_roofSlantDetailed.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 11,
            y: 0.01,
            z: 25,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 4,
        }, 
        hitBoxPosition: {
            x: 11,
            y: 0.01,
            z: 25,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 2.2,
        }
    },
    ///////
    // Murs
    ///////
    Wall_TypeA1: {
        obj: './static/Models/Retro_Urban/Models/wall_typeA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wall_typeA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -25,
            y: 0.01,
            z: -9,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: -25,
            y: 0.01,
            z: -9,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    Wall_TypeA2: {
        obj: './static/Models/Retro_Urban/Models/wall_typeA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wall_typeA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 7,
            y: 0.01,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 7,
            y: 0.01,
            z: 29,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    Wall_TypeA3: {
        obj: './static/Models/Retro_Urban/Models/wall_typeA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wall_typeA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 0.01,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 0.01,
            z: 29,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    Wall_TypeA4: {
        obj: './static/Models/Retro_Urban/Models/wall_typeA.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wall_typeA.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -1,
            y: 0.01,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: -1,
            y: 0.01,
            z: 29,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    WallFence1: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -25,
            y: 1.6,
            z: -9,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: -25,
            y: 1.6,
            z: -9,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    WallFence2: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 7,
            y: 1.6,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 7,
            y: 1.6,
            z: 29,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    WallFence3: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 3,
            y: 1.6,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 3,
            y: 1.6,
            z: 29,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    WallFence4: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -1,
            y: 1.6,
            z: 29,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: -1,
            y: 1.6,
            z: 29,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    WallFence5: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 23,
            y: 0.01,
            z: -3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 23,
            y: 0.01,
            z: -3,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.2,
        }
    },
    WallFence6: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 23,
            y: 1.8,
            z: -3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 23,
            y: 1.6,
            z: -3,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.2,
        }
    },
    WallFence7: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 10,
            y: 0.01,
            z: -1,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 0.1,
            y: 4,
            z: 3.5,
        },         
        hitBoxPosition: {
            x: 10,
            y: 0.01,
            z: -1.5,
        },
        hitBox: {
            x: 6,
            y: 1.6,
            z: 0.2,
        }
    },
    WallFence8: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 0.01,
            z: -24,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        },         
        hitBoxPosition: {
            x: 0,
            y: 1.8,
            z: -24,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    WallFence9: {
        obj: './static/Models/Retro_Urban/Models/wallFence.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallFence.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 1.6,
            z: -24,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: 0,
            y: 0.01,
            z: -24,
        },
        hitBox: {
            x: 6,
            y: 60,
            z: 0.6,
        }
    },
    wallSteps_TypeB1: {
        obj: './static/Models/Retro_Urban/Models/wallSteps_typeB.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallSteps_typeB.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -6,
            y: 0.01,
            z: -3.3,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 5.5,
            y: 15,
            z: 0.1,
        }, 
        hitBoxPosition: {
            x: -6,
            y: 0.01,
            z: -3.3,
        },
        hitBox: {
            x: 3,
            y: 60,
            z: 0.6,
        }
    },
    wallSteps_TypeB2: {
        obj: './static/Models/Retro_Urban/Models/wallSteps_typeB.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/wallSteps_typeB.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -3.2,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 6,
        scale_physic: {              
            x: 0.1,
            y: 15,
            z: 5.5,
        }, 
        hitBoxPosition: {
            x: -3.2,
            y: 0.01,
            z: -6,
        },
        hitBox: {
            x: 3,
            y: 60,
            z: 0.6,
        }
    },
    

    ///////////
    // Voitures
    ///////////
    Truck_Green1: {
        obj: './static/Models/Retro_Urban/Models/truck_green.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_green.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -30,
            y: 0.01,
            z: 6.5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/8,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 8,
        }, 
        hitBoxPosition: {
            x: -30,
            y: 0.01,
            z: 6.5,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 6,
        }
    },
    Truck_Green2: {
        obj: './static/Models/Retro_Urban/Models/truck_green.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_green.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 31,
            y: 0.01,
            z: 6.2,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/12,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 8,
        }, 
        hitBoxPosition: {
            x: 31,
            y: 0.01,
            z: 6.2,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 6,
        }
    },
    Truck_Green3: {
        obj: './static/Models/Retro_Urban/Models/truck_green.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_green.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 31,
            y: 0.01,
            z: -0.75,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/12,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 8,
        }, 
        hitBoxPosition: {
            x: 31,
            y: 0.01,
            z: -0.75,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 6,
        }
    },
    Truck_Grey1: {
        obj: './static/Models/Retro_Urban/Models/truck_grey.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_grey.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -31,
            y: 0.01,
            z: -1,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/12,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 8,
        }, 
        hitBoxPosition: {
            x: -31,
            y: 0.01,
            z: -1,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 6,
        }
    },
    Truck_Grey2: {
        obj: './static/Models/Retro_Urban/Models/truck_grey.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_grey.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0.5,
            y: 0.01,
            z: 16,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {              
            x: 4,
            y: 15,
            z: 2,
        }, 
        hitBoxPosition: {
            x: 0.5,
            y: 0.01,
            z: 16,
        },
        hitBox: {
            x: 1.3,
            y: 4,
            z: 2.7,
        }
    },
    Truck_Grey3: {
        obj: './static/Models/Retro_Urban/Models/truck_grey.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_grey.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 15,
            y: 0.01,
            z: 6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/12,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 2.5,
            y: 15,
            z: 5,
        }, 
        hitBoxPosition: {
            x: 15,
            y: 0.01,
            z: 6,
        },
        hitBox: {
            x: 2.2,
            y: 4,
            z: 3.8,
        }
    },
    Truck_Grey4: {
        obj: './static/Models/Retro_Urban/Models/truck_grey.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_grey.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 6,
            y: 0.01,
            z: -24,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: -Math.PI/2,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 6,
            y: 15,
            z: 3,
        }, 
        hitBoxPosition: {
            x: 6,
            y: 0.01,
            z: -24,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 6,
        }
    },
    Truck_Flat1: {
        obj: './static/Models/Retro_Urban/Models/truck_flat.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_flat.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -29,
            y: 0.01,
            z: -8,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: 0,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 2.2,
            y: 15,
            z: 6,
        }, 
        hitBoxPosition: {
            x: -29,
            y: 0.01,
            z: -8,
        },
        hitBox: {
            x: 2.2,
            y: 60,
            z: 6,
        }
    },
    Truck_Flat2: {
        obj: './static/Models/Retro_Urban/Models/truck_flat.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_flat.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: -14,
            y: 0.01,
            z: 5,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI,
            z: 0,
        },
        scale_threejs: 4,
        scale_physic: {              
            x: 2.2,
            y: 4,
            z: 6,
        }, 
        hitBoxPosition: {
            x: -14,
            y: 0.01,
            z: 5,
        },
        hitBox: {
            x: 2.2,
            y: 1.3,
            z: 3.4,
        }
    },
    Truck_Flat3: {
        obj: './static/Models/Retro_Urban/Models/truck_flat.obj',      // Item
        mtl: './static/Models/Retro_Urban/Models/truck_flat.mtl',      // Item
        mesh: null,                                         // Données de l'affichage de l'item
        position: {                 // Position de l'item
            x: 0,
            y: 0.01,
            z: -6,
        },
        rotation: {                 // Rotation de l'item
            x: 0,
            y: Math.PI/2.3,
            z: 0,
        },
        scale_threejs: 3,
        scale_physic: {              
            x: 4,
            y: 4,
            z: 2,
        }, 
        hitBoxPosition: {
            x: 0,
            y: 0.01,
            z: -6,
        },
        hitBox: {
            x: 1.3,
            y: 1.1,
            z: 2.7,
        }
    },
    // //////////
    // // Chaises
    // //////////
    // chaise1: {
    //     obj: './static/Models/Pol/Relec.obj',      // Item
    //     mtl: './static/Models/Pol/Relec.mtl',      // Item
    //     mesh: null,                                         // Données de l'affichage de l'item
    //     position: {                 // Position de l'item
    //         x: 0,
    //         y: 0,
    //         z: 0,
    //     },
    //     rotation: {                 // Rotation de l'item
    //         x: 0,
    //         y: 0,
    //         z: 0,
    //     },
    //     scale_threejs: 0.025,
    //     scale_physic: {              
    //         x: 1,
    //         y: 1,
    //         z: 1,
    //     }, 
    //     hitBoxPosition: {
    //         x: 0,
    //         y: 0,
    //         z: 0,
    //     },
    //     hitBox: {
    //         x: 1.3,
    //         y: 1.1,
    //         z: 2.7,
    //     }
    // },
    // chaise2: {
    //     obj: './static/Models/Pol/CHAISECAERTON.obj',      // Item
    //     mtl: './static/Models/Pol/CHAISECAERTON.mtl',      // Item
    //     mesh: null,                                         // Données de l'affichage de l'item
    //     position: {                 // Position de l'item
    //         x: 0,
    //         y: 0,
    //         z: 5,
    //     },
    //     rotation: {                 // Rotation de l'item
    //         x: 0,
    //         y: 0,
    //         z: 0,
    //     },
    //     scale_threejs: 0.025,
    //     scale_physic: {              
    //         x: 1,
    //         y: 1,
    //         z: 1,
    //     }, 
    //     hitBoxPosition: {
    //         x: 0,
    //         y: 0,
    //         z: 5,
    //     },
    //     hitBox: {
    //         x: 1.3,
    //         y: 1.1,
    //         z: 2.7,
    //     }
    // }
}

let spawnsCoord = {
    1: {
        x: 0,
        y: 5,
        z: -21,
    },
    2: {
        x: 27,
        y: 5,
        z: 0,
    },
    3: {
        x: 0,
        y: 5,
        z: 25,
    },
    4: {
        x: -24,
        y: 5,
        z: 7,
    },
    5: {
        x: -26,
        y: 5,
        z: -6,
    },
    6: {
        x: 2,
        y: 5,
        z: 7,
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
            y: Math.PI/2,
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
        },rotation: {
            x: 0,
            y: Math.PI/2,
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
        },rotation: {
            x: 0,
            y: Math.PI/2,
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



export {sceneItems}             // Elements du décors, avec leur position
export {spawnsCoord}            // Coordoonées des spawns de la map
export {weaponsCoord}           // Coordonées des empalcements des armes sur les murs