import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="It is Gao Shanghui's digital home to show his current working and also archived projects."
        />
      </Head>
      <div className="bg-gray-50 px-4 h-screen flex items-center justify-center md:px-6 xl:justify-start xl:pl-52">
        <div>
          <p className="text-2xl font-extrabold mb-16 md:text-4xl md:mb-20">
            👋 <span className="tracking-wider">你好</span>!
          </p>
          <h1 className="my-8 md:text-2xl">My name is Gao Shanghui.</h1>
          <h2 className="text-3xl font-extrabold my-8 leading-10 md:text-5xl md:leading-snug md:my-10">
            Solving problems <span className="text-2xl font-normal md:text-4xl">by</span>
            <br />
            design <span className="text-2xl font-normal md:text-4xl">and</span> development
            <br />
            get me <span className="text-yellow-500">excited</span>.
          </h2>
          <p className="leading-7 md:text-2xl md:leading-10">
            I am originally from China, but these days I live in Fukuoka, Japan.
            <br />
            Currently, I am working as a Full-time Web designer.
            <br />I speak Chinese, English, and Japanese. My Chinese name is{' '}
            <span className="tracking-wider">高尚晖</span>(gāo shàng hūi)
            <br />
            You can find me on{' '}
            <a className="text-blue-600" target="_blank" rel="noreferrer" href="https://github.com/gaoshanghui">
              Github
            </a>
            ,{' '}
            <a className="text-blue-600" target="_blank" rel="noreferrer" href="https://dribbble.com/gaoshanghui">
              Dribbble
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
