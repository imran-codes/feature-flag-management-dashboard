import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../helpers/firebase";
import { FeatureFlagType, Recipe } from "../types";
import {
  addRecipe,
  deleteRecipe,
  fetchRecipes,
  updateRecipe,
} from "../helpers/Recipe";
import { fetchFeatureFlags } from "../helpers/FeatureFlag";
import NoUser from "./NoUser";
import AddNewRecipe from "./AddNewRecipe";
import RecipesList from "./RecipesList";
import EditRecipe from "./EditRecipe";
import FeatureFlagList from "./FeatureFlagList";

export default function AdminPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]); // Use Recipe type
  const [newRecipe, setNewRecipe] = useState<Recipe>({
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    isFeatured: false,
  });
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [flags, setFlags] = useState<FeatureFlagType[]>([]);
  const [newFlagName, setNewFlagName] = useState("");
  const [newFlagEnabled, setNewFlagEnabled] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        fetchRecipes(setRecipes);
        fetchFeatureFlags(setFlags);
      }
    });
  }, []);

  const handleAddRecipe = () => {
    addRecipe(newRecipe, setRecipes);
    setNewRecipe({
      id: 0,
      title: "",
      description: "",
      imageUrl: "",
      isFeatured: false,
    });
  };

  const handleUpdateRecipe = () => {
    if (editingRecipe) {
      updateRecipe(editingRecipe, setRecipes);
      setEditingRecipe(null);
    }
  };

  if (!user) return <NoUser />;

  console.log("flags", flags);
  console.log("recipes", recipes);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">
        Admin: Manage Recipes & Feature Flags
      </h1>

      {/* Add New Recipe */}
      <AddNewRecipe
        newRecipe={newRecipe}
        setNewRecipe={setNewRecipe}
        handleAddRecipe={handleAddRecipe}
      />

      {/* Recipes */}
      <h2 className="text-2xl mb-4">Recipes</h2>
      <RecipesList
        recipes={recipes}
        setEditingRecipe={setEditingRecipe}
        deleteRecipe={deleteRecipe}
        setRecipes={setRecipes}
      />

      {editingRecipe && (
        <EditRecipe
          editingRecipe={editingRecipe}
          setEditingRecipe={setEditingRecipe}
          handleUpdateRecipe={handleUpdateRecipe}
        />
      )}

      {/* Feature Flags */}
      {flags?.length > 0 && (
        <FeatureFlagList
          flags={flags}
          newFlagName={newFlagName}
          setNewFlagName={setNewFlagName}
          newFlagEnabled={newFlagEnabled}
          setNewFlagEnabled={setNewFlagEnabled}
          setFlags={setFlags}
        />
      )}
    </div>
  );
}
