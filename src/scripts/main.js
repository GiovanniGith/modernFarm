console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";


const yearlyPlan = createPlan();

console.log(yearlyPlan);


const asparagusSeed = createAsparagus();

console.log(asparagusSeed)

/*const mayflower ={
    type: "Mayflower",
    height: 340,
    output:72
}



//addPlant(mayflower);
*/

//console.log(usePlants());

const plan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(plan);
// console.log(usePlants());

const modernFarm = harvestPlants(usePlants());
console.log(modernFarm);

catalog(modernFarm)