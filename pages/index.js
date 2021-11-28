import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/navigation';
import projectCover from '../public/project-cover.jpg';

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
      <Navigation />
      <div className="p-5 space-y-5 mt-[69px]">
        {/* Project Card */}
        <div className="relative h-[calc(66vh)]">
          <Image
            src={projectCover}
            alt="Project Name"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-project-cover-to-t" />
          <div className="absolute bottom-10 left-4">
            <h2 className="text-3xl leading-9 font-bold text-white drop-shadow-md mb-1">
              Pomoflow
            </h2>
            <p className="text-base leading-6 font-normal text-white drop-shadow-md mb-4 max-w-[calc(100vw-72px)]">
              The simple description about the project.
            </p>
            <Link href="/project/pomoflow">
              <button className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md text-sm leading-5 font-bold">
                View case study
              </button>
            </Link>
          </div>
        </div>

        {/* Project Card */}
        <div className="relative h-[calc(66vh)]">
          <Image
            src={projectCover}
            alt="Project Name"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-project-cover-to-t" />
          <div className="absolute bottom-10 left-4">
            <h2 className="text-3xl leading-9 font-bold text-white drop-shadow-md mb-1">
              Pomoflow
            </h2>
            <p className="text-base leading-6 font-normal text-white drop-shadow-md mb-4">
              The simple description about the project.
            </p>
            <Link href="/project/pomoflow">
              <button className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md text-sm leading-5 font-bold">
                View case study
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="py-4 border-t">
        <p className="text-sm leading-5 font-bold text-center text-gray-900">
          Designed & Built by Gao Shanghui
        </p>
        <p className="text-sm leading-5 font-normal text-center text-gray-600">
          Curious about the source code? You can find it{' '}
          <a
            href="#"
            target="_blank"
            href="https://twitter.com/"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            here
          </a>
          .
        </p>
      </footer>
    </>
  );
}
