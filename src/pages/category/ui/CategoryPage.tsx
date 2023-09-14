import { useMockCategory } from "../../../entities/category/api";
import { RecipeCard } from "../../../entities/recipe/ui/RecipeCard";

export const CategoryPage = () => {
  const category = useMockCategory(1);

  return (
    <div>
      <div>Категория {category.name}</div>
      <div>Рецепты:</div>
      <div>
        {category.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
