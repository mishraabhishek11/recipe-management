"use server";

import { Meal } from "@/types/meal";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { isValidEmail, isValidText } from "./validator";
import { revalidatePath } from "next/cache";

export const shareMeal = async (
  prevState: { message: string },
  formData: FormData,
) => {
  const meal = Object.fromEntries(formData.entries()) as Meal;

  if (
    !isValidText(meal.title) ||
    !isValidText(meal.creator) ||
    !isValidEmail(meal.creator_email) ||
    !isValidText(meal.summary) ||
    !isValidText(meal.instructions) ||
    !meal.image ||
    meal.image.size < 1
  ) {
    return { message: "Invalid input" };
  }
  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
};
