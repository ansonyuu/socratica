import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-col items-center ">
      <div className="w-[70vw] lg:w-[40vw] flex flex-col justify-center items-start content-between text-left">
        <h1>Credits</h1>
        <h4>Standing on the shoulders of friends and giants</h4>

        <p className="">
          As a place of creative vibrance or simply rest, this community is a
          warm place for many. A few nods to those who make the magic possible.
          <br />
          <br />
          Thank you to Adi and Aman, for laying the groundwork. <br />
          <br />
          Thank you to the hosts like Jonathan, Mathurah, Anson, Joss, Krish,
          Daekun, and more for carrying on the logistical torch.
          <br />
          <br />
          Thank you to the founding fellows and current attendees who
          consistently give their time and energy to the community.
          <br /> <br />
          Additionally, much gratitude to community partners like Aide, Operand,
          Aadil, Eigenspace, and Contrary Capital for their generous financial
          and tactical support.
        </p>
      </div>
      <img
        className="rotating w-[100vw] h-auto inline-block"
        src="/orbit-full.png"
      />
    </main>
  );
};

export default Home;
