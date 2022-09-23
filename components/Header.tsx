import Head from "next/head";
import Link from "next/link";

function Header(props: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Socratica" />
        <meta name="keywords" content="Socratica" />
        <meta name="author" content="The Socratica Team" />
        <title>Socratica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-end child:pr-10 child:pt-10 child:pb-10">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/credits">
          <a>Credits</a>
        </Link>
      </div>
    </>
  );
}

export default Header;
