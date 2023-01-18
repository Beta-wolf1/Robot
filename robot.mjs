import { graph } from "./buildgraph.mjs";

const runRobot = (state, robot, memory) => {
    for(let turns = 0;; turns++) {
        if(state.parcels.length == 0) {
            console.log("Done");
            break;
        }
        let action = robot(state, memory); // what the robot returns matters
    }
}

// Omo, it's like head yaff dry. Anytime I leave javascript to learn something, it takes hours of coding to reboot the head back. O ma se o....
// programming is very volatile. Will I have the time to even teach it to fisayo...

// i will surely need graph for this endeavor
