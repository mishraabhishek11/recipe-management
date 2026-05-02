import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

import React, { Suspense } from "react";

const MealsList = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meal created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself, its easy and fun.
        </p>
        <div className={classes.cta}>
          <Link href="/meals/share">Share your Recipe</Link>
        </div>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <MealsList />
        </Suspense>
      </main>
    </>
  );
};

export default MealPage;
