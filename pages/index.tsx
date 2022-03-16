import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import projectCaffyCover from "../public/images/project-cover-caffy.jpg";
import projectCaffyCoverSmall from "../public/images/project-cover-caffy-small.jpg";
import projectCover2 from "../public/images/project-covers/project-cover-2.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. This is the portfolio to show my recent projects. I have always believed that design and technology is one thing, and that their creative collaboration is the way to create better solutions."
        />
      </Head>
      <Header />
      <div className="mt-[68px] space-y-5 p-5 lg:mt-[88px]">
        <Card
          title="Caffy"
          media={projectCaffyCover}
          mediaSmall={projectCaffyCoverSmall}
          description="Design a mobile web app for a cafe."
          link="/"
          priority={true}
        />
        <Card
          title="Project name"
          media={projectCover2}
          mediaSmall={projectCover2}
          description="The simple description about the project."
          link="/"
          priority={false}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
