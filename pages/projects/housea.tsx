import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import InPageNavigation from "../../components/in-page-navigation";
import Headline2 from "../../components/headline-2";
import Headline3 from "../../components/headline-3";
import Headline4 from "../../components/headline-4";
import Anchor from "../../components/anchor";

// Images used in this page
import overviewImage from "../../public/images/housea-overview.png";
import overviewSmallImage from "../../public/images/housea-overview-s.jpg";
import emap1 from "../../public/images/housea-emap-1.png";
import emap2 from "../../public/images/housea-emap-2.png";
import persona1 from "../../public/images/housea-persona-1.png";
import persona2 from "../../public/images/housea-persona-2.png";
import userJourneyMap from "../../public/images/housea-ujmap.png";
import sitemapImage from "../../public/images/housea-sitemap.png";
import wireframeImage from "../../public/images/housea-wireframes.png";
import lowfiPrototypeImage from "../../public/images/housea-lowfi-prototype.png";
import mockupsTypographyImage from "../../public/images/housea-mockups-typography.png";
import mockupsColorsImage from "../../public/images/housea-mockups-colors.png";
import prototypeImage from "../../public/images/housea-figma-prototype.jpg";

// Mockups - large screens
import mockupsImg1 from "../../public/images/housea-mockups-1.jpg";
import mockupsImg2 from "../../public/images/housea-mockups-2.jpg";
import mockupsImg3 from "../../public/images/housea-mockups-3.jpg";
import mockupsImg4 from "../../public/images/housea-mockups-4.jpg";
import mockupsImg5 from "../../public/images/housea-mockups-5.jpg";
import mockupsImg6 from "../../public/images/housea-mockups-6.jpg";
import mockupsImg7 from "../../public/images/housea-mockups-7.jpg";
import mockupsImg8 from "../../public/images/housea-mockups-8.jpg";
import mockupsImg9 from "../../public/images/housea-mockups-9.jpg";
import mockupsImg10 from "../../public/images/housea-mockups-10.jpg";
import mockupsImg11 from "../../public/images/housea-mockups-11.jpg";

// Mockups - small screens
import mockupsImgS1 from "../../public/images/housea-mockups-s-1.jpg";
import mockupsImgS2 from "../../public/images/housea-mockups-s-2.jpg";
import mockupsImgS3 from "../../public/images/housea-mockups-s-3.jpg";
import mockupsImgS4 from "../../public/images/housea-mockups-s-4.jpg";
import mockupsImgS5 from "../../public/images/housea-mockups-s-5.jpg";
import mockupsImgS6 from "../../public/images/housea-mockups-s-6.jpg";
import mockupsImgS7 from "../../public/images/housea-mockups-s-7.jpg";
import mockupsImgS8 from "../../public/images/housea-mockups-s-8.jpg";
import mockupsImgS9 from "../../public/images/housea-mockups-s-9.jpg";
import mockupsImgS10 from "../../public/images/housea-mockups-s-10.jpg";
import mockupsImgS11 from "../../public/images/housea-mockups-s-11.jpg";
import mockupsImgS12 from "../../public/images/housea-mockups-s-12.jpg";
import mockupsImgS13 from "../../public/images/housea-mockups-s-13.jpg";
import mockupsImgS14 from "../../public/images/housea-mockups-s-14.jpg";
import mockupsImgS15 from "../../public/images/housea-mockups-s-15.jpg";
import mockupsImgS16 from "../../public/images/housea-mockups-s-16.jpg";
import mockupsImgS17 from "../../public/images/housea-mockups-s-17.jpg";
import mockupsImgS18 from "../../public/images/housea-mockups-s-18.jpg";

const mockupsSmallImgs = [
  mockupsImgS1,
  mockupsImgS2,
  mockupsImgS3,
  mockupsImgS4,
  mockupsImgS5,
  mockupsImgS6,
  mockupsImgS7,
  mockupsImgS8,
  mockupsImgS9,
  mockupsImgS10,
  mockupsImgS11,
  mockupsImgS12,
  mockupsImgS13,
  mockupsImgS14,
  mockupsImgS15,
  mockupsImgS16,
  mockupsImgS17,
  mockupsImgS18,
];

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
      <div className="mx-auto mt-[68px] max-w-[1040px] lg:mt-[88px] lg:p-0">
        <div className="lg:hidden">
          <div className="px-5 py-12">
            <h2 className="mb-2 text-[40px] font-black leading-[48px] tracking-[0.01em] text-slate-900">
              Housea
            </h2>
            <p className="body-1 text-slate-600">
              Design a website for finding rental apartments
            </p>
          </div>
          <div>
            <Image
              src={overviewSmallImage}
              alt="Caffy application screenshots"
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
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
            Housea is a website for finding rental apartments. Housea&apos;s
            goal is to provide a friendly and easy-to-use rental service for
            foreigners living in Japan. Housea serves as a platform for
            searching apartments and provides users with a wealth of rental
            information through cooperation with housing agents. Housea supports
            multiple languages. The language of the user interface is assumed to
            be setting as Chinese for this Case Study.
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

      {/* --- Understanding the user ---  */}
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
            <div className="flex flex-col gap-6 lg:flex-row">
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
            <div className="flex flex-col lg:flex-row gap-6">
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
            <div className="mt-4 px-5">
              <p className="body-2 text-center text-slate-600">
                Goal: A easy way to decide which apartment to stay in and book
                an agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Starting the design ---  */}
      <Anchor id="Starting-the-design" />
      <section className="py-12 lg:py-24">
        <div className="mx-auto max-w-[1040px] px-5">
          <div className="space-y-20 lg:space-y-28">
            <div>
              <div className="lg:text-center">
                <Headline2>Starting the design</Headline2>
              </div>
              <div className="lg:mx-auto lg:max-w-[760px] lg:text-center">
                <p className="body-1 text-slate-600">
                  Before getting into the mockups and high-fidelity prototypes,
                  I wanted to get an idea of what the core parts of the
                  application would look like by creating sitemaps and
                  wireframes.
                </p>
              </div>
            </div>
            <div>
              <div className="lg:text-center">
                <Headline3>Sitemap</Headline3>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Image
                    src={sitemapImage}
                    alt="User flow"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="lg:text-center">
                <Headline3>Wireframes</Headline3>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <Image
                    src={wireframeImage}
                    alt="User flow"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="overflow-hidden">
                    <Image
                      src={lowfiPrototypeImage}
                      alt="User flow"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mt-4 px-5">
                    <p className="body-2 mx-auto max-w-2xl text-center text-slate-600">
                      Using the completed set of digital wireframes, I also
                      created a low-fidelity prototype. So the prototype could
                      be used in a usability study to test the core part of the
                      product.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usability study */}
            <div>
              <div className="lg:text-center">
                <Headline3>Usability study</Headline3>
                <div className="lg:mx-auto lg:max-w-[760px] lg:text-center">
                  <p className="body-1 mb-8 text-slate-600">
                    I conducted two rounds of usability studies. Findings from
                    the first study helped guide the designs from wireframes to
                    mockups. The second study used a high-fidelity prototype and
                    revealed what aspects of the mockups needed refining.
                  </p>
                </div>
              </div>
              <div className="space-y-4 lg:flex lg:justify-center lg:space-y-0 lg:space-x-4">
                <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                  <div className="lg:text-center">
                    <Headline4>Round 1 Improvement</Headline4>
                  </div>
                  <p className="body-1 text-slate-600 lg:text-center">
                    Add a button in Mobile&apos;s Bottom bar so that users can
                    easily view the price details of the apartment at any time
                    (Dialog).
                  </p>
                </div>
                <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                  <div className="lg:text-center">
                    <Headline4>Round 2 Improvement</Headline4>
                  </div>
                  <p className="body-1 text-slate-600 lg:text-center">
                    Add the search bar to the Top bar to make it easy for users
                    to start searching from any page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Refining the design ---  */}
      <Anchor id="Refining-the-design" />
      <section className="py-12 px-5 lg:py-24 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-20 lg:space-y-28">
            <div>
              <div className="lg:text-center">
                <Headline2>Refining the design</Headline2>
              </div>
            </div>
            {/* Refining the design - Fundations */}
            <div>
              <div className="lg:text-center">
                <Headline3>Fundations</Headline3>
              </div>
              <div className="space-y-20">
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={mockupsTypographyImage}
                    alt="Styles - typography"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={mockupsColorsImage}
                    alt="Styles - colors, elevations and elements image"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            {/* Refining the design - Mockups */}
            <div>
              <div className="lg:text-center">
                <Headline3>Muckups</Headline3>
              </div>
              <div className="space-y-6">
                <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                  <Image
                    src={mockupsImg1}
                    alt="Mockups - Home"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="w-full">
                    <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                      <Image
                        src={mockupsImg2}
                        alt="Mockups - Room"
                        layout="responsive"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col gap-6">
                      <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                        <Image
                          src={mockupsImg3}
                          alt="Mockups - Room confirmation"
                          layout="responsive"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                        <Image
                          src={mockupsImg4}
                          alt="Mockups - Complete"
                          layout="responsive"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAF9] py-12 px-5 lg:py-24 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative w-full overflow-hidden border border-slate-300 shadow">
            <Image
              src={mockupsImg5}
              alt="mockup - inbox"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-5 lg:py-24 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-full">
              <div className="flex flex-col gap-y-6">
                <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                  <Image
                    src={mockupsImg6}
                    alt="Mockup - Blogs"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                  <Image
                    src={mockupsImg7}
                    alt="Mockup - Blog"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-y-6">
                <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                  <Image
                    src={mockupsImg8}
                    alt="Mockup - Room List"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                  <Image
                    src={mockupsImg9}
                    alt="Mockup - Browsing history"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-full overflow-hidden border border-slate-300 shadow">
                  <Image
                    src={mockupsImg10}
                    alt="Mockup - Wish List"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAF9] py-12 px-5 lg:py-24 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative w-full overflow-hidden border border-slate-300 shadow">
            <Image
              src={mockupsImg11}
              alt="Mockup - Meeting"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-5 lg:py-24 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex w-full flex-wrap justify-center gap-6">
            {mockupsSmallImgs.map((img, index) => {
              return (
                <div
                  key={index}
                  className="relative w-full overflow-hidden rounded-2xl border border-slate-300 shadow lg:w-[32%]"
                >
                  <Image
                    src={img}
                    alt="mockup small screens"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAF9] py-12 lg:py-24">
        <div className="mx-auto max-w-[1040px] px-5 lg:px-0">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-[400px]">
              <Headline3>Prototype</Headline3>
              <p className="body-1 mb-4 text-slate-600">
                I created mockups in Figma and then converted them to a
                high-fidelity prototype.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.figma.com/proto/ZBMYMysfiBZoU12hq3SwN7/Mockups?node-id=17%3A73&scaling=scale-down&page-id=17%3A2&starting-point-node-id=17%3A73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition-all hover:text-blue-700 hover:underline"
                >
                  <span>
                    Large (desktop)
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 inline-block"
                    >
                      <path
                        d="M21 3V2H22V3H21ZM11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L11.7071 13.7071ZM20 11V3H22V11H20ZM21 4H13V2H21V4ZM21.7071 3.70711L11.7071 13.7071L10.2929 12.2929L20.2929 2.29289L21.7071 3.70711Z"
                        fill="currentColor"
                      />
                      <path
                        d="M20 15V15C20 16.8692 20 17.8038 19.5981 18.5C19.3348 18.9561 18.9561 19.3348 18.5 19.5981C17.8038 20 16.8692 20 15 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V9C4 7.13077 4 6.19615 4.40192 5.5C4.66523 5.04394 5.04394 4.66523 5.5 4.40192C6.19615 4 7.13077 4 9 4V4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://www.figma.com/proto/ZBMYMysfiBZoU12hq3SwN7/Mockups?node-id=313%3A1696&scaling=scale-down&page-id=313%3A1485&starting-point-node-id=313%3A1696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 text-blue-600 transition-all hover:text-blue-700 hover:underline"
                >
                  <span>
                    Small (mobile)
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 inline-block"
                    >
                      <path
                        d="M21 3V2H22V3H21ZM11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L11.7071 13.7071ZM20 11V3H22V11H20ZM21 4H13V2H21V4ZM21.7071 3.70711L11.7071 13.7071L10.2929 12.2929L20.2929 2.29289L21.7071 3.70711Z"
                        fill="currentColor"
                      />
                      <path
                        d="M20 15V15C20 16.8692 20 17.8038 19.5981 18.5C19.3348 18.9561 18.9561 19.3348 18.5 19.5981C17.8038 20 16.8692 20 15 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V9C4 7.13077 4 6.19615 4.40192 5.5C4.66523 5.04394 5.04394 4.66523 5.5 4.40192C6.19615 4 7.13077 4 9 4V4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full pt-10 lg:max-w-[560px] lg:pt-0">
              <div className="overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={prototypeImage}
                  alt="High fidelity prototype image"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Going forward ---  */}
      <Anchor id="Going-forward" />
      <section className="py-12 px-5 lg:py-24 lg:px-0">
        <div className="space-y-20 lg:space-y-28">
          <div className="lg:text-center">
            <Headline2>Going forward</Headline2>
          </div>
          <div>
            <div className="lg:text-center">
              <Headline3>What I learned</Headline3>
            </div>
            <div className="space-y-4">
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>Focusing on the interview itself</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  In this user interview, I avoided multitasking as much as
                  possible, such as taking many notes during the interview.
                  Instead, I focused on the interviewees, paying attention to
                  their tone of voice and expressions. When I encountered
                  something I did not understand, I would try to get the
                  interviewer to explain it clearly. By recording the interview
                  (with the interviewee&aposs permission), I can review and organize
                  it again afterwards. This way, I can get more information from
                  the user interviews.
                </p>
              </div>
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>Start with the core part of the product</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  In this design, I first completed the part from searching for
                  apartments and booking agents, the most core part for Housea.
                  And use the prototype for testing and making improvements.
                  Then add features like sending messages and blogs. When
                  designing a larger service or product, starting with the core
                  part of the product helps me to grasp the overall structure of
                  the service during the design process.
                </p>
              </div>
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>
                  Structuring components to handle states, themes, and
                  variations
                </Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  I created Mockups and Prototypes using Figma. When creating
                  components, I learned to use the automatic layout and variant
                  features, which improved the overall design uniformity and
                  made it easier to manage and reuse components. In addition,
                  using the interactive component feature improved my efficiency
                  when building prototypes.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:text-center">
              <Headline3>Next steps</Headline3>
            </div>
            <div className="space-y-4">
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>Taking more stakeholders into account</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  Include more stakeholders in the scope of the user research,
                  such as agency staff, and develop additional types of user
                  personas. Making Housea not only solves the problem of finding
                  apartments for users, but also takes into account the
                  difficulties faced by agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Housea;
