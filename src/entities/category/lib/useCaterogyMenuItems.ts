import { MenuProps } from "antd";
import { CategoryModel } from "../model";

type MenuItem = Required<MenuProps>["items"][number];

type CategoryMenuItem = {
  menuItem: MenuItem;
  category: CategoryModel;
};

export const useCategoryMenuItems = (
  categories: CategoryModel[]
): CategoryMenuItem[] =>
  categories.map((category) => ({
    category,
    menuItem: {
      key: category.id,
      label: category.name,
    },
  }));
