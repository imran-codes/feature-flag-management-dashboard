export interface Recipe {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
}

export interface FeatureFlagType {
  enabled: boolean;
  featureName: string;
  id: string;
}

export const recipes = [
  {
    id: 1,
    title: "Tacos",
    description: "A delicious Mexican dish.",
    imageUrl:
      "https://i.ibb.co/ZNQWQfh/Leonardo-Phoenix-A-vibrant-and-colorful-depiction-of-a-trio-of-0.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    imageUrl: "https://i.ibb.co/Kx4drHK/carbonara.jpg",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Beef Stroganoff",
    description: "A hearty meal with beef and mushrooms.",
    imageUrl: "https://i.ibb.co/hgr68nQ/beef-stroganoff.jpg",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Tikka Masala",
    description: "A flavorful Indian curry.",
    imageUrl: "https://i.ibb.co/fkqGN0q/tikka-masala.jpg",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Margerita Pizza",
    description: "A classic Italian pizza with tomato and mozzarella.",
    imageUrl:
      "https://i.ibb.co/6DyL1Y0/Leonardo-Phoenix-A-freshly-baked-Margherita-pizza-with-a-golde-0.jpg",
    isFeatured: false,
  },
];
