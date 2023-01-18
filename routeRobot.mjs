import { buildGraph } from "./buildgraph.mjs";

let route = [
    "H", "T", "G", "R", "G", "M", "ED", "B", "E", "MC", "I", "MC", "H"
]
// E -> Eleigbo
// B -> Beta's House
// E -> Ebook Designer
// M -> Market
// I -> Idoka
// MC -> Methodist church
// G -> God's Praise
// R -> Redeem Church
// T -> Town Hall
// H -> Hotel
function routeRobot(state, memory = []) {
    if(memory.length == 0) memory = route;
    return {destination: memory[0], memory: memory.slice(1)};
}

export { routeRobot }