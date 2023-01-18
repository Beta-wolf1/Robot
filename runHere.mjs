import { runRobot } from "./Robot.mjs";
import { randomRobot } from "./randomRobot.mjs";
import CityState from "./CityState.mjs";
import { buildGraph } from "./buildgraph.mjs";

let city = CityState.generateParcels(5, buildGraph.graph);

runRobot(city, randomRobot)
