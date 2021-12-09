import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/header';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. It is the portfolio to show my recent projects."
        />
        {/* Add the web font Inter to the entire application */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="p-5 space-y-5 mt-[69px]">
        <div>
          {/* Introduction Left Part */}
          <div>
            <p className="font-sans-cn">你好！</p>
            <h2>Hello! My name is Gao Shanghui. 👋 </h2>
            <p>
              I am originally from China. After I finished my undergraduate
              studies, I chose to study abroad. I completed a graduate program
              in design at Kyushu University, and at the same time, I focused my
              research on machine learning and data mining.{' '}
            </p>
            <p>
              In the past few years, I have dived into language learning, UI
              design, and Web development. I believe that creative collaboration
              between design and technology is the way that to create better
              solutions.
            </p>
            <p>You can also find me at:</p>
            <div>
              <Link href="/">
                <a>
                  <img src="" alt="LinkedIn Logo" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="" alt="Github Logo" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="" alt="Dribbble Logo" />
                </a>
              </Link>
            </div>
          </div>
          {/* Introduction Right Part */}
          <img src="" alt="My profile image" />
        </div>
      </div>
      <Footer />
    </>
  );
}
