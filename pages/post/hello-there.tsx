import Image from "next/image";
import Head from "next/head";

import Navigation from "@components/navigation";

const Hello = () => (
  <>
    <Head>
      <title>Hello There :: Next Blog</title>
    </Head>
    <Navigation />
    <article>
      <h1>Hello There!</h1>
      <Image src="/post/hello-there/ocean.jpg" width={648} height={427} />
    </article>
  </>
);

export default Hello;
