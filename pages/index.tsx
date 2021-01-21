import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Head from "next/head";

import Header from "@components/header";
import Navigation from "@components/navigation";

import { getPostList } from "@shared/utils";

type PostList = string[];

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`post/${slug}`}>
                  <a>{slug.replace("-", " ")}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts: PostList = getPostList();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
