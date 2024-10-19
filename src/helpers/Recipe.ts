import { Recipe } from "../types";
import { getFirebaseToken } from "./firebase";

// Fetch all recipes
export const fetchRecipes = async (setRecipes: (recipes: Recipe[]) => void) => {
  try {
    // Get Firebase token to authenticate the request and pass it in the headers
    const token = await getFirebaseToken();
    console.log("token", token);
    const response = await fetch(
      "https://feature-flag-api.onrender.com/api/recipes",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setRecipes(data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

// Add a new recipe
export const addRecipe = async (
  newRecipe: Recipe,
  setRecipes: (recipes: Recipe[]) => void
) => {
  try {
    const token = await getFirebaseToken();
    const response = await fetch(
      "https://feature-flag-api.onrender.com/api/recipes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newRecipe),
      }
    );
    const data = await response.json();
    setRecipes(data);
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

// Update a recipe
export const updateRecipe = async (
  updatedRecipe: Recipe,
  setRecipes: (recipes: Recipe[]) => void
) => {
  try {
    const token = await getFirebaseToken();
    await fetch(
      `https://feature-flag-api.onrender.com/api/recipes/${updatedRecipe.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedRecipe),
      }
    );
    fetchRecipes(setRecipes);
  } catch (error) {
    console.error("Error updating recipe:", error);
  }
};

// Delete a recipe
export const deleteRecipe = async (
  id: number,
  setRecipes: (recipes: Recipe[]) => void
) => {
  try {
    const token = await getFirebaseToken();
    await fetch(`https://feature-flag-api.onrender.com/api/recipes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchRecipes(setRecipes);
  } catch (error) {
    console.error("Error deleting recipe:", error);
  }
};
