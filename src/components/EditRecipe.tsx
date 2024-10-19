import React from "react";
import { Recipe } from "../types";

type EditRecipeProps = {
  editingRecipe: Recipe;
  setEditingRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  handleUpdateRecipe: () => void;
};

const EditRecipe: React.FC<EditRecipeProps> = ({
  editingRecipe,
  setEditingRecipe,
  handleUpdateRecipe,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-2">Edit Recipe</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Title"
        value={editingRecipe.title}
        onChange={(e) =>
          setEditingRecipe({ ...editingRecipe, title: e.target.value })
        }
      />
      <textarea
        className="border p-2 mb-2 w-full"
        placeholder="Description"
        value={editingRecipe.description}
        onChange={(e) =>
          setEditingRecipe({
            ...editingRecipe,
            description: e.target.value,
          })
        }
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Image URL"
        value={editingRecipe.imageUrl}
        onChange={(e) =>
          setEditingRecipe({ ...editingRecipe, imageUrl: e.target.value })
        }
      />
      <button
        onClick={handleUpdateRecipe}
        className="bg-green-500 text-white px-4 py-2"
      >
        Save Changes
      </button>
      <button
        onClick={() => setEditingRecipe(null)}
        className="bg-gray-500 text-white px-4 py-2 ml-2"
      >
        Cancel
      </button>
    </div>
  );
};

export default EditRecipe;
