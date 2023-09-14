import { RecipeModel } from ".";

export const mockRecipes: RecipeModel[] = [
  {
    id: 1,
    name: "Борщ",
    ingredients: ["Капуста 300г", "Морковь 200г"],
    cookingSteps: [],
    cookingTime: 60,
    portionsCount: 4,
  },
  {
    id: 2,
    name: "Котлета",
    ingredients: ["Фарш"],
    cookingSteps: [],
    cookingTime: 45,
    portionsCount: 2,
  },
  {
    id: 3,
    name: 'Салат "Цезарь"',
    ingredients: ["Соус цезарь", "Помидоры черри", "Салат Айсберг"],
    cookingSteps: [],
    cookingTime: 15,
    portionsCount: 1,
  },
  {
    id: 4,
    name: "Стейк из говядины",
    ingredients: ["Соль", "Перец", "Чеснок", "Говяжья вырезка"],
    cookingSteps: [],
    cookingTime: 20,
    portionsCount: 1,
  },
  {
    id: 5,
    name: "Стейк из свинины",
    ingredients: ["Соль", "Перец", "Чеснок", "Свиная вырезка"],
    cookingSteps: [],
    cookingTime: 20,
    portionsCount: 1,
  },
];
