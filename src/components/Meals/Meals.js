import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvaliableMeals";
import { Fragment } from "react/cjs/react.production.min";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
};

export default Meals;
