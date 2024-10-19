import React from "react";
import {
  addFeatureFlag,
  deleteFeatureFlag,
  toggleFeatureFlag,
} from "../helpers/FeatureFlag";
import { FeatureFlagType } from "../types";

type FeatureFlagProps = {
  flags: FeatureFlagType[];
  newFlagName: string;
  setNewFlagName: React.Dispatch<React.SetStateAction<string>>;
  newFlagEnabled: boolean;
  setNewFlagEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setFlags: React.Dispatch<React.SetStateAction<FeatureFlagType[]>>;
};

const FeatureFlagList: React.FC<FeatureFlagProps> = ({
  flags,
  newFlagName,
  setNewFlagName,
  newFlagEnabled,
  setNewFlagEnabled,
  setFlags,
}) => {
  // Adding a new feature flag
  const handleAddFeatureFlag = async () => {
    if (newFlagName.trim()) {
      await addFeatureFlag(newFlagName, newFlagEnabled, setFlags);
      setNewFlagName(""); // Reset after adding
    }
  };

  // Toggling the feature flag - we only pass the 'id' here
  const handleToggleFlag = async (id: string) => {
    await toggleFeatureFlag(id, setFlags); // Only pass the id, backend handles the toggle
  };

  // Deleting the feature flag
  const handleDeleteFlag = async (id: string) => {
    await deleteFeatureFlag(id, setFlags); // Pass the id to delete
  };

  return (
    <div>
      <h2 className="text-2xl mt-8 mb-4">Feature Flags</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Feature Name"
          value={newFlagName}
          onChange={(e) => setNewFlagName(e.target.value)}
          className="border p-2 mr-2"
        />
        <label>
          <input
            type="checkbox"
            checked={newFlagEnabled}
            onChange={() => setNewFlagEnabled(!newFlagEnabled)}
            className="mr-2"
          />
          Enabled
        </label>
        <button
          onClick={handleAddFeatureFlag}
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Feature Flag
        </button>
      </div>

      <ul>
        {flags?.map((flag: FeatureFlagType) => (
          <li key={flag.id} className="mb-4">
            {flag.featureName} - {flag.enabled ? "Enabled" : "Disabled"}
            <button
              onClick={() => handleToggleFlag(flag.id)} // Only pass id for toggling
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Toggle
            </button>
            <button
              onClick={() => handleDeleteFlag(flag.id)} // Pass the id for deletion
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureFlagList;
