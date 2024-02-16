const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar','Raw Bird Thigh']
const cookbook = [
    {
        id: 1,
        name: "Mushroom RiceBalls",
        ingredients : ["Hylian Rice", "Big Hearty Truffle"]
    },
    {
        id: 2,
        name: "Cheesy Omlette",
        ingredients : ["Hateno Cheese", "Bird Egg"]
    },
    {
        id: 3,
        name: "Cheesy Hylian Pizza",
        ingredients : ["Tabantha Wheat", "Hateno Cheese"]
    },
    {
        id: 4,
        name: "Prime Meat and Rice Bowl",
        ingredients : ["Raw Prime Meat", "Hylian Rice"]
    },
    {
        id: 5,
        name: "Egg Pudding",
        ingredients : ["Fresh Milk", "Cane Sugar", "Bird Egg"]
    },
    {
        id: 6,
        name: "Egg Tart",
        ingredients : ["Tabantha Wheat", "Cane Sugar", "Goat Butter", "Bird Egg"]
    },
    {
        id: 7,
        name: "Chicken Egg Fried Rice",
        ingredients : ["Hylian Rice", "Raw Prime Meat","Bird Egg"]
    },
    {
        id: 8,
        name: "Poultry Pilaf",
        ingredients : ["Hylian Rice", "Goat Butter", "Bird Egg", "Raw Bird Thigh"]
    },

]

const cook = (ingredients) =>{
   // The first thing we did is iterate through the cookbook array
    for (const recipe of cookbook) {
        let mealFound = false;
        // create a variable called meal found and place it in the correct scope and default to false
        // The next thing we did was iterate through the ingrients array inside of the recipe object inside of the cookbook array
        for (const neededIngredients of recipe.ingredients) {
    // Then we iterate through the inputarray of our array        
            for (const inputIngredients of ingredients) {
                if(inputIngredients === neededIngredients){
                    // console.log(inputIngredients)
                    // console.log(neededIngredients)
                    console.log(recipe.name)
                }

                
            }
        }
        
    }
}

    console.log('MEALS:')
    console.log('---------------')
    

    const input = ["Bird Egg", "Big Hearty Truffle"];
    const makeMeal = cook(input);
    console.log(makeMeal)
    
  
  
  
  
    //console.log(input)
    /*for (const item of input) {
        if ingredients === item.ingredients

        return true
        if true console.log(item.name)*/
    
 //   console.log(arguments.length)
  //  console.log(arguments[0])
   // console.log(ingredient2)
    



/*const cook = (recipe) => {
    if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Big Hearty Truffle') {
        meals.push('Mushroom Rice Balls')
    }
    if (firstIngredient === 'Hateno Cheese' && secondIngredient === 'Bird Egg') {
        meals.push('Cheesy Omlette')
    }
    if (firstIngredient === 'Tabantha Meat' && secondIngredient === 'Hateno Cheese') {
        meals.push('Cheesy Hylian Pizza')
    }
    if (firstIngredient === 'Raw Prime Meat' && secondIngredient === 'Hylian Rice') {
        meals.push('Prime Meat and Rice Bowl')
    }
}*/












