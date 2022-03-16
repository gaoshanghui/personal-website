import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import projectCover1 from "../public/images/project-covers/project-cover-1.jpg";
import projectCover2 from "../public/images/project-covers/project-cover-2.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. This is the portfolio to show my recent projects."
        />
      </Head>
      <Header />
      <div className="mt-[69px] space-y-5 p-5">
        <Card
          title="Pomoflow"
          media={projectCover1}
          description="A web application to track your daily activities."
          link="/"
        />
        <Card
          title="Circle"
          media={projectCover2}
          description="A web application to track your daily activities."
          link="/"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
