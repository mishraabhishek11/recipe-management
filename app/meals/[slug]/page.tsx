import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = getMeal(slug);

  if (!meal) {
    return notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = getMeal(slug);

  if (!meal) {
    return notFound();
  }
  const { title, image, summary, creator, creator_email, instructions } = meal;
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main
        className={classes.instructions}
        dangerouslySetInnerHTML={{
          __html: instructions.replace(/\n/g, "<br />"),
        }}
      ></main>
    </>
  );
};

export default MealDetailPage;
