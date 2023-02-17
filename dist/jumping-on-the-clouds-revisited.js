"use strict";
function jumpingOnClouds(jumps, clouds) {
    let energy = 100;
    const n = clouds.length;
    let i = 0;
    while (((i % n) + n) % n || energy === 100) {
        if (clouds[((i % n) + n) % n])
            energy -= 3;
        else
            energy--;
        i += jumps;
    }
    return energy;
}
console.log(jumpingOnClouds(2, [0, 0, 1, 0, 0, 1, 1, 0]));
