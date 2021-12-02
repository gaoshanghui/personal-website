import Head from 'next/head';
import Card from '../components/card';
import Footer from '../components/footer';
import Header from '../components/header';
import projectCover1 from '../public/project-covers/project-cover-1.jpg';
import projectCover2 from '../public/project-covers/project-cover-2.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. It is the portfolio to show my recent projects."
        />
      </Head>
      New portfolio weebsite is coming soon!
      {/* <Header />
      <div className="p-5 space-y-5 mt-[69px]">
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
      <Footer /> */}
    </>
  );
}
