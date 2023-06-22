 const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListElement = document.getElementById('recipe-list')

function displayRecipes(recipes){
    recipeListElement.innerHTML = "";

    recipes.forEach((recipe) =>{
        const recipeItemElement = document.createElement('li');
        recipeItemElement.classList.add('recipe-item');
        
        recipeImageElement = document.createElement('img');
        recipeImageElement.src = recipe.image;
        recipeImageElement.alt = 'recipe image'

        recipeItemElement.appendChild(recipeImageElement)

        recipeListElement.appendChild(recipeItemElement)
    })
    
}

async function getRecipes() {
   const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();

 displayRecipes(recipes)
  
}

init(); 

//NOT DONE
//FIX THE API REQUEST

