


export const catalog = (foodObjects) => { 
    for(const food of foodObjects ) { 
    document.getElementById("container").innerHTML += `<section class="plant"> ${food.type}</section>`
    
 }
}