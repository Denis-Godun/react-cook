export type RecipeModel = {
  id: number;
  name: string;
  pictureSrc?: string;
  ingredients: string[];
  cookingTime: number; // В минутах
  portionsCount: number; // Кол-во порций
  cookingSteps: string[]; // Шаги приготовления
};
