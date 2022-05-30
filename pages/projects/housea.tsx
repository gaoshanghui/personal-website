import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import InPageNavigation from "../../components/in-page-navigation";
import Headline2 from "../../components/headline-2";
import Headline3 from "../../components/headline-3";
import Headline4 from "../../components/headline-4";
import Anchor from "../../components/anchor";

// Images used in this page
import overviewImage from "../../public/images/housea-overview.png";
import emap1 from "../../public/images/housea-emap-1.png";
import emap2 from "../../public/images/housea-emap-2.png";
import persona1 from "../../public/images/housea-persona-1.png";
import persona2 from "../../public/images/housea-persona-2.png";
import userJourneyMap from "../../public/images/housea-ujmap.png";

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
      {/* --- Hero image --- */}
      <div className="mt-[68px] hidden lg:mt-[88px] lg:block lg:p-0">
        <div className="relative bg-[url('/images/housea-overview-bg.png')]">
          <h1 className="mx-auto max-w-[1040px] pt-20 pb-4">
            <span className="block text-[28px] font-black leading-8 text-slate-900">
              Housea
            </span>
            <span className="body-1 block text-slate-900">
              Design a website for finding rental apartments
            </span>
          </h1>
          <div className="relative mx-auto max-w-[1040px]">
            <Image
              src={overviewImage}
              alt="Housea website screenshots"
              layout="responsive"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* --- Project Overview --- */}
      <div className="bg-[#FAFAF9] px-5 py-24 lg:py-32">
        <div className="mx-auto max-w-[1040px]">
          <div className="text-center">
            <Headline2>Project Overview</Headline2>
          </div>
          <p className="body-1 mx-auto max-w-[760px] text-center text-slate-600">
            Housea is a website for finding rental apartments. Housea's goal is
            to provide a friendly and easy-to-use rental service for foreigners
            living in Japan. Housea serves as a platform for searching
            apartments and provides users with a wealth of rental information
            through cooperation with housing agents. Housea supports multiple
            languages. The language of the user interface is assumed to be
            setting as Chinese for this Case Study.
          </p>
          <br />
          <p className="body-1 mx-auto max-w-[760px] text-center text-slate-600">
            For users who are unfamiliar with the unique process and rules of
            renting a room in Japan, Housea provides them with a guide to the
            basics of renting an apartment and some tips. In addition, Housea
            supports the function of sending messages and videos. So housing
            agents can provide consultation services for users online.
          </p>
          <div className="mt-16 space-y-10 lg:mt-20 lg:flex lg:items-start lg:space-y-0">
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <p className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  Project Name
                </p>
              </div>
              <p className="body-1 text-center text-slate-600">
                Housea
                <br />
                (Web)
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <p className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  Duration
                </p>
              </div>
              <p className="body-1 text-center text-slate-600">
                2022.03 - 2022.04
                <br />
                (2 months)
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <p className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  Role
                </p>
              </div>
              <p className="body-1 text-center text-slate-600">UX Designer</p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <p className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  Responsibilities
                </p>
              </div>
              <p className="body-1 text-center text-slate-600">
                User Research, wireframing, prototyping, usability studies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* In page naviation */}
      <InPageNavigation
        steps={[
          {
            title: "Understanding the user",
            href: "#Understanding-the-user",
          },
          {
            title: "Starting the design",
            href: "#Starting-the-design",
          },
          {
            title: "Refining the design",
            href: "#Refining-the-design",
          },
          {
            title: "Going forward",
            href: "#Going-forward",
          },
        ]}
      />

      <Anchor id="Understanding-the-user" />
      <section className="py-12 lg:py-24">
        <div className="mx-auto max-w-[1040px] px-5">
          <div className="space-y-20 lg:space-y-28">
            <div>
              <div className="lg:text-center">
                <Headline2>Understanding the user</Headline2>
              </div>
              <div>
                <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
                  I conducted interviews to understand the users I am designing
                  for and their needs. Two of the main groups identified were
                  international students and foreign national staff.
                </p>
                <br />
                <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
                  The study found that language and unfamiliarity with the
                  rental process were problems that many people had faced when
                  renting an apartment. Not being able to communicate fluently
                  with real estate agents in Japanese to express their needs and
                  not being familiar with the process of renting an apartment in
                  Japan, such as Reikin (also known as Key Money) and
                  guarantors, can be the reason of worry and confusion for them
                  when renting an apartment.
                </p>
                <br />
                <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
                  In addition, some users mentioned in the interview that they
                  were cannot see the apartments on-site because they were in a
                  different location. They were worried about the actual
                  condition of the apartments before moving in because of the
                  little information provided.
                </p>
              </div>
            </div>

            {/* Pain points */}
            <div>
              <div className="lg:text-center">
                <Headline3>Pain points</Headline3>
              </div>
              <div className="space-y-4 lg:flex lg:justify-center lg:space-y-0 lg:space-x-4">
                <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                  <div className="lg:text-center">
                    <Headline4>Language</Headline4>
                  </div>
                  <p className="body-1 text-slate-600 lg:text-center">
                    Unable to communicate fluently with agents in Japanese to
                    express their needs.
                  </p>
                </div>
                <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                  <div className="lg:text-center">
                    <Headline4>Procedure</Headline4>
                  </div>
                  <p className="body-1 text-slate-600 lg:text-center">
                    Not familiar with the procedure for renting an apartment in
                    Japan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Persona */}
        <div className="mx-auto mt-28 max-w-[1200px] space-y-20 px-5 lg:px-0">
          <div>
            <div className="lg:text-center">
              <Headline3>User Persona</Headline3>
            </div>
            <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
              Based on the content of the user interviews, I created two empathy
              maps. Using the empathy maps, I made two user personas.
              <br />
              (one is a student, one is a working adult).
            </p>
          </div>
          {/* User Persona - Empathy maps */}
          <div>
            <div className="lg:text-center">
              <Headline4>Empathy maps</Headline4>
            </div>
            <div className="lg:flex lg:gap-x-6">
              <div className="relative w-full overflow-hidden">
                <Image
                  src={emap1}
                  alt="Zhang's empathy map"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-full overflow-hidden">
                <Image
                  src={emap2}
                  alt="Li's empathy map"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {/* User Persona - Personas */}
          <div>
            <div className="lg:text-center">
              <Headline4>Personas</Headline4>
            </div>
            <div className="lg:flex lg:gap-x-6">
              <div className="relative w-full overflow-hidden">
                <Image
                  src={persona1}
                  alt="Zhang's persona"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-full overflow-hidden">
                <Image
                  src={persona2}
                  alt="Li's persona"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* User Journey Map */}
        <div className="mx-auto mt-28 max-w-[1200px] space-y-20 px-5 lg:px-0">
          <div>
            <div className="lg:text-center">
              <Headline3>User Journey Map</Headline3>
            </div>
            <div className="relative w-full overflow-hidden">
              <Image
                src={userJourneyMap}
                alt="User Journey Map"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Housea;
