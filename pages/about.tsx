import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-[70vw] lg:w-[40vw] flex flex-col justify-center items-start content-between text-left">
      <h1 className="text-6xl md:text-8xl">About</h1>
      <h4>What is this?</h4>
      <p>
        Socratica is a live co-working session hosted every Sunday to bring
        together Waterloo&apos;s builders, creative technologists, budding
        founders, and more to work on their passion projects. It&apos;s time
        carved out for deep work, giving you space to *finally* work on the
        project you&apos;ve always been itching to start. Demo, eat food,
        receive feedback, find inspiration in new friends, and explore your
        intellectual curiosities &#60;3
      </p>
      <h4>Who is it for?</h4>
      <p>
        Makers, artists, learners, researchers, and founders If you are writing
        a world-shattering blog, laboring on your next piece of art, building
        the next moonshot company, or shipping that side-project, come join!
      </p>
    </div>
  );
};

export default Home;
