import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InPageNavigation from "../../components/in-page-navigation";
import Anchor from "../../components/anchor";
import Section from "../../components/section";

// Typography
import Headline1 from "../../components/headline-1";
import Headline2 from "../../components/headline-2";
import Headline3 from "../../components/headline-3";
import Headline4 from "../../components/headline-4";

import overViewImg from "../../public/images/circle-overview.png";
import overViewSmallImg from "../../public/images/circle-overview-small.png";
import personaImg1 from "../../public/images/circle-persona-1.png";
import personaImg2 from "../../public/images/circle-persona-2.png";
import ideationImg1 from "../../public/images/circle-ideation-1.jpg";
import ideationImg2 from "../../public/images/circle-ideation-2.jpg";
import ideationImg3 from "../../public/images/circle-ideation-3.jpg";
import wireframesImg from "../../public/images/circle-wireframes.png";
import fundationsImg from "../../public/images/circle-fundations.png";
import prototypeImg from "../../public/images/circle-prototype.png";

import mockupImg1 from "../../public/images/circle-mockup-1.png";
import mockupImg2 from "../../public/images/circle-mockup-2.png";
import mockupImg3 from "../../public/images/circle-mockup-3.png";
import mockupImg4 from "../../public/images/circle-mockup-4.png";
import mockupImg5 from "../../public/images/circle-mockup-5.png";
import mockupImg6 from "../../public/images/circle-mockup-6.png";
import mockupImg7 from "../../public/images/circle-mockup-7.png";
import mockupImg8 from "../../public/images/circle-mockup-8.png";
import mockupImg9 from "../../public/images/circle-mockup-9.png";
import mockupImg10 from "../../public/images/circle-mockup-10.png";
import mockupImg11 from "../../public/images/circle-mockup-11.png";
import mockupImg12 from "../../public/images/circle-mockup-12.png";
import mockupImg13 from "../../public/images/circle-mockup-13.png";
import mockupImg14 from "../../public/images/circle-mockup-14.png";
import mockupImg15 from "../../public/images/circle-mockup-15.png";

const mockupImgs = [
  mockupImg1,
  mockupImg2,
  mockupImg3,
  mockupImg4,
  mockupImg5,
  mockupImg6,
  mockupImg7,
  mockupImg8,
  mockupImg9,
  mockupImg10,
  mockupImg11,
  mockupImg12,
  mockupImg13,
  mockupImg14,
  mockupImg15,
];

const Circle: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Circle | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This is the case study of Circle. Circle is a tool to help international students share household items."
        />
      </Head>
      <Header />
      {/* ==================== */}
      {/* Project Hero */}
      {/* ==================== */}
      {/* Project hero - normal */}
      <div className="mx-auto mt-[68px] max-w-[1040px] lg:mt-[88px] lg:p-0">
        <div className="lg:hidden">
          <div className="px-5 py-12">
            <h2 className="mb-2 text-[40px] font-black leading-[48px] tracking-[0.01em] text-slate-900">
              Circle
            </h2>
            <p className="body-1 text-slate-600">
              Design a tool to help international students share household
              items.
            </p>
          </div>
          <div>
            <Image
              src={overViewSmallImg}
              alt="Circle application screenshots"
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      {/* Project hero - large */}
      <div className="mt-[68px] hidden lg:mt-[88px] lg:block lg:p-0">
        <div className="bg-teal-900">
          <div className="relative mx-auto max-w-[1440px]">
            <Image
              src={overViewImg}
              alt="Circle application screenshots"
              layout="responsive"
              objectFit="cover"
              priority
            />
            <div className="absolute top-0 left-0 h-full w-full bg-[#134E4A] opacity-[53%]"></div>
            <div className="absolute top-[calc(50%-54px)] left-[13%]">
              <div>
                <div className="mb-2 text-white drop-shadow-md">
                  <Headline1>Circle</Headline1>
                </div>
                <p className="text-xl leading-8 text-white drop-shadow-md">
                  Design a tool to help international students share household
                  items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ */}
      {/* Project Overview */}
      {/* ================================ */}
      <div className="bg-[#FAFAF9] px-5 py-24 lg:py-32">
        <div className="mx-auto max-w-[1040px]">
          <div className="text-center">
            <Headline2>Project overview</Headline2>
          </div>
          <p className="body-1 mx-auto max-w-[760px] text-center text-slate-600">
            When international students are ready to go back to their home
            countries or to work elsewhere, they need to handle a lot of
            household goods. They need a tool to help transfer these items to
            the students who need them. Circle&apos;s primary target users
            include students who are new to a school or moving and need to
            purchase home furnishings. Students who are graduating and want to
            transfer their unused furniture and home furnishings.
          </p>
          <div className="mt-16 space-y-10 lg:mt-20 lg:flex lg:items-start lg:space-y-0">
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <p className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  Project name
                </p>
              </div>
              <p className="body-1 text-center text-slate-600">
                Circle
                <br />
                iOS
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <p className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  Duration
                </p>
              </div>
              <p className="body-1 text-center text-slate-600">
                2022.05 - 2022.06
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

      {/* ================================ */}
      {/* Section: Understanding the user */}
      {/* ================================ */}
      <Anchor id="Understanding-the-user" />
      <Section>
        <div className="space-y-20 lg:space-y-28">
          <div>
            <div className="lg:text-center">
              <Headline2>Understanding the user</Headline2>
            </div>
            <div>
              <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
                I conducted interviews to understand the users I am designing
                for and their needs. Most interview participants reported
                feeling badly about throwing away unused items that were still
                usable, but they didn’t actively try to transfer these items.
                The feedback received through research made it clear that users
                would be open and willing to share unused items to reduce waste,
                if they had access to an easy-to-use tool to help guide them.
              </p>
            </div>
          </div>
          {/* The problem and the goal */}
          <div className="mx-auto flex max-w-[824px] flex-col gap-6 md:flex-row">
            <div className="w-full">
              <Headline4>The problem</Headline4>
              <p className="body-1 text-slate-600">
                International students share information about unused items
                mainly through group chats and forums. As a result, the
                information can only be spread in a small area. Most of these
                group chats do not have a fixed topic, and information about
                items can be quickly overwhelmed by others.
              </p>
            </div>
            <div className="w-full">
              <Headline4>The goal</Headline4>
              <p className="body-1 text-slate-600">
                Design an application to help transfer unused household items
                safely and smoothly between international students.
              </p>
            </div>
          </div>

          {/* Persona */}
          <div>
            <div className="lg:text-center">
              <Headline3>Persona</Headline3>
            </div>
            <div className="mx-auto flex max-w-[824px] flex-col gap-6 md:flex-row">
              <div className="relative w-full overflow-hidden">
                <Image
                  src={personaImg1}
                  alt="Zhang's persona"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-full overflow-hidden">
                <Image
                  src={personaImg2}
                  alt="Qian's persona"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="mx-auto flex max-w-[824px] flex-col md:flex-row md:gap-6">
              <div className="mt-8 w-full">
                <Headline4>Problem statement</Headline4>
                <p className="body-1 text-slate-600">
                  Zhang is an international student who needs a tool to transfer
                  unused furniture and household items because it feels wasteful
                  to dispose of these usable items as garbage.{" "}
                </p>
              </div>
              <div className="mt-8 w-full">
                <Headline4>Problem statement</Headline4>
                <p className="body-1 text-slate-600">
                  Qian is a fresh graduate student in the Department of
                  Environment. She needs to buy some necessities and furniture
                  because she is moving out of the student residence and renting
                  her apartment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================================ */}
      {/* Section: Starting the design */}
      {/* ================================ */}
      <Anchor id="Starting-the-design" />
      <section className="py-12 lg:py-24">
        <div className="mx-auto max-w-[1040px] px-5">
          <div className="space-y-20 lg:space-y-28">
            <div>
              <div className="lg:text-center">
                <Headline2>Starting the design</Headline2>
              </div>
            </div>
          </div>

          {/* Ideation */}
          <div className="mt-20 flex flex-col items-center gap-6 md:mt-28 md:flex-row">
            <div className="w-full">
              <Headline3>Ideation</Headline3>
              <p className="body-1 mb-4 text-slate-600 lg:max-w-[400px]">
                I did a quick ideation exercise (Crazy 8) to come up with ideas
                for how to address gaps identified in the competitive services.
                I drafted some paper wireframes about the main flow of the app,
                ensured that the elements that made it to digital wireframes
                would be well-suited to address user pain. I tried different
                layouts and put them together to see how they worked together.
              </p>
            </div>
            <div className="w-full">
              <div className="overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={ideationImg1}
                  alt="Ideation image 01"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4 md:mt-6 md:gap-6">
            <div className="w-full lg:pt-0">
              <div className="overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={ideationImg2}
                  alt="Ideation image 02"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="w-full lg:pt-0">
              <div className="overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={ideationImg3}
                  alt="Ideation image 02"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 lg:mx-auto lg:max-w-[400px]">
            <p className="body-2 text-center text-slate-600">
              Stars were used to mark the elements of each sketch that would be
              used in the initial digital wireframes.
            </p>
          </div>

          {/* Digital wireframes */}
          <div className="mt-28 flex flex-col items-center gap-6 md:flex-row">
            <div className="w-full">
              <Headline3>Digital wireframes</Headline3>
              <p className="body-1 mb-4 text-slate-600 lg:max-w-[400px]">
                Using the completed set of digital wireframes, I also created a
                low-fidelity prototype. So the prototype could be used in a
                usability study.
              </p>
            </div>
            <div className="w-full">
              <div className="overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={wireframesImg}
                  alt="Digital wireframes"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {/* Useability study */}
          <div className="mt-28 items-center gap-6">
            <div className="lg:text-center">
              <Headline3>Usability study</Headline3>
            </div>
            <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
              I conducted two rounds of usability studies. Findings from the
              first study helped guide the designs from wireframes to mockups.
              The second study used a high-fidelity prototype and revealed what
              aspects of the mockups needed refining.
            </p>
            <div className="mt-8 space-y-4 lg:flex lg:justify-center lg:space-y-0 lg:space-x-4">
              <div className="w-full rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                <div className="lg:text-center">
                  <Headline4>Profile Info</Headline4>
                </div>
                <p className="body-1 text-slate-600 lg:text-center">
                  People want to access the seller's profile before they send a
                  request
                </p>
              </div>
              <div className="w-full rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                <div className="lg:text-center">
                  <Headline4>Tracking the status</Headline4>
                </div>
                <p className="body-1 text-slate-600 lg:text-center">
                  People have difficulty tracking the status of a transaction
                </p>
              </div>
              <div className="w-full rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                <div className="lg:text-center">
                  <Headline4>Clear indication</Headline4>
                </div>
                <p className="body-1 text-slate-600 lg:text-center">
                  People prefer a clear indication of when a request has been
                  accepted
                </p>
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
            <div>
              <div className="lg:text-center">
                <Headline3>Fundations</Headline3>
              </div>
              <div>
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={fundationsImg}
                    alt="fundation style guide"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="lg:text-center">
                <Headline3>Muckups</Headline3>
              </div>
              <div>
                <div className="flex w-full flex-wrap justify-center gap-6">
                  {mockupImgs.map((img, index) => {
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
            </div>
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
                    Open the prototype
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
                  src={prototypeImg}
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
                <Headline4>Focusing on specific user needs</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  I learned that while I limited my target users to a certain
                  range, focusing on specific user needs and through each step
                  of the design process helped me come up with solutions that
                  may apply to a large-scale problem.
                </p>
              </div>
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>Choose the right font</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  For this design, I chose the iOS system font SF. By learning
                  how to use this font, I learned that there are two categories
                  of SF fonts, Text and Display. The correct use of them can
                  improve the readability.
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
                <p className="body-1 mb-4 text-slate-600">
                  Provide incentives and rewards for users who successfully
                  share items. Optimize the designs to fit specific user needs
                  of each device and screen size.
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

export default Circle;
