import { RecipeModel } from "../recipe";

export type CategoryModel = {
  id: number;
  name: string;
  recipes: RecipeModel[];
};
