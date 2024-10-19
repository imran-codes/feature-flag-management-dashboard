import React from "react";
import { Recipe } from "../types";

type RecipesListProps = {
  recipes: Recipe[];
  setEditingRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  deleteRecipe: (
    id: number,
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
  ) => void;
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const RecipesList: React.FC<RecipesListProps> = ({
  recipes,
  setEditingRecipe,
  deleteRecipe,
  setRecipes,
}) => {
  return (
    <div>
      {recipes?.map((recipe) => (
        <div key={recipe.id} className="border-b py-2 flex justify-between">
          <div>
            <h3 className="text-xl">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="w-32 h-32 object-cover"
            />
          </div>
          <div>
            <button
              onClick={() => setEditingRecipe(recipe)}
              className="bg-yellow-500 text-white px-4 py-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteRecipe(Number(recipe.id), setRecipes)}
              className="bg-red-500 text-white px-4 py-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
