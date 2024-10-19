import React from "react";
import { Recipe } from "../types";

type AddNewRecipeProps = {
  newRecipe: Recipe;
  setNewRecipe: React.Dispatch<React.SetStateAction<Recipe>>;
  handleAddRecipe: () => void;
};

const AddNewRecipe: React.FC<AddNewRecipeProps> = ({
  newRecipe,
  setNewRecipe,
  handleAddRecipe,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl mb-2">Add New Recipe</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Title"
        value={newRecipe.title}
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
      />
      <textarea
        className="border p-2 mb-2 w-full"
        placeholder="Description"
        value={newRecipe.description}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, description: e.target.value })
        }
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Image URL"
        value={newRecipe.imageUrl}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, imageUrl: e.target.value })
        }
      />
      <button
        onClick={handleAddRecipe}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>
    </div>
  );
};

export default AddNewRecipe;
