import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-[60vw] flex flex-col justify-center items-center content-between text-center">
      <h1 className="text-6xl md:text-8xl">Socratica</h1>
      <h4>
        An open collective of makers, artists, engineers, designers, writers,
        poets, and everything in between. We meet weekly.
      </h4>
      <div>
        <Link href="https://airtable.com/shryeWTj4hnFSbFnz">
          <button className="m-10 pr-5 md:pr-10 pl-5 md:pl-10 no-underline">
            <p className="italic">Attend (Waterloo)</p>
          </button>
        </Link>
        <Link href="https://airtable.com/shrPqKZdL5aLqGeul">
          <button className="m-10 pr-5 md:pr-10 pl-5 md:pl-10 no-underline">
            <p className="italic">Start a chapter</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
