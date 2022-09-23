import Header from "./Header";
import { useRouter } from "next/router";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div className="h-[100vh] w-[100vw] flex align-center justify-center">
      <div className="m-10 border-2 border-black overflow-hidden">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
