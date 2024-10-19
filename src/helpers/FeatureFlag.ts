import { FeatureFlagType } from "../types";
import { getFirebaseToken } from "./firebase";

// Fetch feature flags
export const fetchFeatureFlags = async (
  setFlags: (flags: FeatureFlagType[]) => void
) => {
  try {
    const token = await getFirebaseToken();
    const response = await fetch(
      "https://feature-flag-api.onrender.com/api/feature-flags",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setFlags(data);
  } catch (error) {
    console.error("Error fetching flags:", error);
  }
};

// Add a new feature flag
export const addFeatureFlag = async (
  featureName: string,
  enabled: boolean,
  setFlags: (flags: FeatureFlagType[]) => void
) => {
  const token = await getFirebaseToken();
  const response = await fetch(
    "https://feature-flag-api.onrender.com/api/feature-flags",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ featureName, enabled }),
    }
  );
  await response.json();
  fetchFeatureFlags(setFlags); // Refresh flags after adding
};

// Toggle a feature flag
export const toggleFeatureFlag = async (
  id: string, // Use the 'id' to identify which flag to toggle
  setFlags: (flags: FeatureFlagType[]) => void // Callback to update the state
) => {
  try {
    const token = await getFirebaseToken();
    const response = await fetch(
      `https://feature-flag-api.onrender.com/api/feature-flags/${id}`, // Update endpoint if needed
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Pass the token for authentication
        },
        body: JSON.stringify({ id }), // Pass the 'id' in the body
      }
    );

    if (!response.ok) {
      throw new Error("Failed to toggle feature flag");
    }

    const updatedFlags = await response.json();
    setFlags(updatedFlags); // Update the flags in the frontend state
  } catch (error) {
    console.error("Error toggling feature flag:", error);
  }
};

// Delete a feature flag
export const deleteFeatureFlag = async (
  id: string, // Changed to accept ID
  setFlags: (flags: FeatureFlagType[]) => void
) => {
  const token = await getFirebaseToken();
  await fetch(`https://feature-flag-api.onrender.com/api/feature-flags/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  fetchFeatureFlags(setFlags); // Refresh flags after deletion
};
