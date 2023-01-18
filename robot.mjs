
// The heart of the Robot 

const runRobot = (state, robot, memory) => {
    for(let turns = 0;; turns++) {
        if(state.parcels.length == 0) {
            console.log(`Done in ${turns}`);
            break;
        }
        let action = robot(state, memory); // what the robot returns matters
        state = state.move(action.destination);
        console.log(`Moved to ${action.destination}`)
    }
}

export { runRobot };