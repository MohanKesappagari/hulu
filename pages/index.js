import Head from "next/head";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Results from "../components/results/Results";
import request from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context?.query?.genre;
  const req = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  )
    .then((data) => data.json())
    .catch((e) => console.log(e));

  return {
    props: {
      results: req?.results || [],
    },
  };
}
