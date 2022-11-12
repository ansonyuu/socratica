import Header from "./Header";
import { useRouter } from "next/router";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div className="md:h-[100vh] flex align-center justify-center">
      <div className="m-10 border-2 border-black overflow-hidden">
        <Header />

        <main className="h-full flex flex-col items-center">
          {children}
          <img
            className="rotating w-[100vw] h-auto inline-block"
            src="/orbit-full.png"
          />
        </main>
      </div>
    </div>
  );
}
