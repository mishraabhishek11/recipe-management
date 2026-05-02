import { Meal } from "@/types/meal";
import MealItem from "./meal-item";
import css from "./meals-grid.module.css";

const MealsGrid = ({ meals }: { meals: Meal[] }) => {
  return (
    <>
      <ul className={css.meals}>
        {meals && meals.length > 0
          ? meals.map((meal) => (
              <li key={meal.id}>
                <MealItem {...meal} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default MealsGrid;
