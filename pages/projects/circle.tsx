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
import personaImg1 from "../../public/images/circle-persona-1.png";
import personaImg2 from "../../public/images/circle-persona-2.png";

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
          <div className="mx-auto flex max-w-[824px] gap-6">
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
            <div className="mx-auto flex max-w-[824px] gap-6">
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
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Circle;
