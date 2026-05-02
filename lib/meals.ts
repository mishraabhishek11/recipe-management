import { Meal } from "@/types/meal";
import sql from "better-sqlite3";
import fs from "node:fs";

import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug: string) => {
  return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
};

export const saveMeal = async (meal: Meal) => {
  meal.slug = slugify(meal.title);
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const streamWriter = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  streamWriter.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save image");
    }
  });

  meal.image = `/images/${fileName}`;

  const query = db.prepare(`
      INSERT INTO meals (slug,
         title,
         image,
         summary,
         instructions,
         creator,
         creator_email) 
      VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  query.run(meal);
};
