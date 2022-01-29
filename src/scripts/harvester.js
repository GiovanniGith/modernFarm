export const harvestPlants = (array) => { 
    const newPlan = []  
    for(const plant of array){
        if(plant.output === 2){
            newPlan.push(plant);
            newPlan.push(plant);
        }
        else if( plant.output === 3){
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
        }
        else if(plant.output === 4){
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
        }
        else if(plant.type === "Corn"){
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
        }
        else if(plant.output === 6){
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
            newPlan.push(plant)
        }

    }
 return newPlan;   
}