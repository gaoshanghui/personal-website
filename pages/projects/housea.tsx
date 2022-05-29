import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/header";

const Housea: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Housea | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This is the case study of House. Housea is a website for finding rental apartments. Housea's goal is to provide a friendly and easy-to-use rental service for foreigners living in Japan."
        />
      </Head>
      <Header />
    </div>
  );
};

export default Housea;
