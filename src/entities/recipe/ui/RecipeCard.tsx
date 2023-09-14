import { Card } from "antd";
import { RecipeModel } from "../model";

type Props = {
  recipe: RecipeModel;
};

export const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={recipe.pictureSrc && <img alt="example" src={recipe.pictureSrc} />}
    >
      <div>
        <h2>{recipe.name}</h2>
      </div>
      <div>Ингридиенты: {recipe.ingredients.join(" ")}</div>
      <div>Время приготовления: {recipe.cookingTime} мин</div>
      <div>Кол-во порций: {recipe.portionsCount}</div>
    </Card>
  );
};
