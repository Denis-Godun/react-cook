import { mockCategories } from "./__mocks";
import { CategoryModel } from "./model";

export const useMockCategories = () => {
  return mockCategories;
};

export const useMockCategory = (categoryId: CategoryModel["id"]) => {
  return mockCategories.find((category) => category.id === categoryId)!;
};
