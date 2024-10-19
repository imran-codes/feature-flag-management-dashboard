export interface Recipe {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FeatureFlagType {
  enabled: boolean;
  featureName: string;
  id: string;
}
