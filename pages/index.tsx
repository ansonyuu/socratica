import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-col items-center ">
      <div className="w-[40vw] flex flex-col justify-center items-center content-between text-center">
        <h1>Socratica</h1>
        <h4>
          A collective of makers, artists, engineers, designers, writers, poets,
          and everything in between. We meet weekly.
        </h4>

        <button className="m-10 pr-10 pl-10">
          <a
            className="no-underline"
            href="https://airtable.com/shryeWTj4hnFSbFnz"
          >
            <p className="italic">See you soon :)</p>
          </a>
        </button>
      </div>
      <img
        className="rotating w-[100vw] h-auto inline-block"
        src="/orbit-full.png"
      />
    </main>
  );
};

export default Home;
