import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-[70vw] lg:w-[40vw] flex flex-col justify-center items-start content-between text-left">
      <h1 className="text-6xl md:text-8xl">Credits</h1>
      <h4>Standing on the shoulders of friends and giants</h4>

      <p className="">
        As a place of creative vibrance or simply rest, this community is a warm place for many. <br />
        A few nods to those who make the magic possible.
        <br />
        <br />
        Thank you to Adi, Aman, Anson, Jonathan, Joss, and Mathurah for laying the groundwork. <br />
        <br />
        Thank you to hosts like Aadil, Ananya, Daekun, Dhvani, Dhruv, Jaclyn, Krish, Maryam, Naomie, 
        Rishi and more for continuing the vision and carrying the logistical torch.
        <br />
        <br />
        Thank you to the founding fellows and current attendees who consistently
        give their time and energy to the community. You make us better.
        <br /> <br />
        Finally, thank you to community partners like Aide, Operand,
        Eigenspace, and Contrary Capital for their generous financial, tactical, and emotional support.
      </p>
    </div>
  );
};

export default Home;
