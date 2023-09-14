import { mockRecipes } from "../recipe/__mocks";
import { CategoryModel } from "./model";

const findRecipeByName = (...names: string[]) => {
  return mockRecipes.filter((recipe) =>
    names.some((name) => recipe.name.toLowerCase().includes(name.toLowerCase()))
  );
};

export const mockCategories: CategoryModel[] = [
  {
    id: 1,
    name: "Горячие блюда",
    recipes: findRecipeByName("Котлета", "Стейк"),
  },
  {
    id: 2,
    name: "Холодные закуски",
    recipes: findRecipeByName("Салат"),
  },
  {
    id: 3,
    name: "Десерты",
    recipes: [],
  },
  {
    id: 4,
    name: "Cупы",
    recipes: findRecipeByName("Борщ"),
  },
];
