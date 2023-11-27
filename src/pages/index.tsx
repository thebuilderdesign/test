import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Farm</title>
        <meta
          name="description"
          content="Solana farm"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
