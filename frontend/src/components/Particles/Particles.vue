<template>
    <Particles id="tsparticles" :options="options" :particlesInit="particlesInit" />
</template>

<script>
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim

export default {
    data() {
        return {
            options: {
                background: {
                    color: "#BBB", // this sets a background color for the canvas
                },
                fullScreen: {
                    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true, // enables the click event, it's disabled by default
                            mode: "push", // adds the particles on click
                        },
                        onHover: {
                            enable: true, // enables the mouse hover event, it's disabled by default
                            mode: "repulse", // repulse the particles on mouse hover
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 8, // number of particles to add on click
                        },
                        repulse: {
                            distance: 150, // distance of the particles from the cursor
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000", // change particle color to black
                    },
                    links: {
                        distance: 150, // maximum distance for linking the particles
                        enable: true, // enabling this will make the particles linked together
                        color: "#FFF",
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: true,
                    move: {
                        enable: true, // enabling this will make particles move in the canvas
                        speed: { min: 0.1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
                    },
                    shape: {
                        type: ["circle", "triangle", "image"], // shape of the particles
                    },
                    number: {
                        value: 100,
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                    },
                    size: {
                        value: { min: 1, max: 15 }, // let's randomize the particles size a bit
                    },
                },
            },
        };
    },
    methods: {
        async particlesInit(engine) {
            await loadSlim(engine);
        },
    },
};
</script>
