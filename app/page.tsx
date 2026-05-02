import Link from "next/link";
import css from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={css.header}>
        <div className={css.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={css.hero}>
            <h1>Food Recipe for Next Level Foodies</h1>
            <p>Share food from all over the world.</p>
          </div>
          <div className={css.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={css.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={css.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
