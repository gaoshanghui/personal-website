import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import ContainedButton from "../components/contained-button";
import SectionTitle from "../components/section-title";
import EducationInfo from "../components/education-info";
import SocialLinks from "../components/social-links";
import profilePicLarge from "../public/images/profile-pic-large.jpg";
import profilePicSmall from "../public/images/profile-pic-small.jpg";
import SkillInfo from "../components/skill-info";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. It is the portfolio to show my recent projects."
        />
      </Head>
      <Header />
      <div className="mx-auto mt-[69px] max-w-[1040px] p-5 lg:p-0">
        <section className="mb-32 pt-16 lg:flex lg:items-center lg:justify-between lg:space-x-8 lg:pt-28">
          <div className="lg:w-1/2">
            <p className="mb-10 font-sans-cn text-2xl font-bold tracking-[0.12em] text-slate-900 ">
              👋 你好！
            </p>
            <h2 className="mb-4 text-base font-bold text-slate-900 lg:mb-6 lg:text-xl">
              My name is Gao Shanghui.
            </h2>
            <p className="mb-10 text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
              I am originally from China. After I finished my undergraduate
              studies, I chose to study abroad. I completed a graduate program
              in design at Kyushu University, and at the same time, I focused my
              research on machine learning and data mining. <br />
              <br />
              In the past few years, I have dived into language learning, UI
              design, and Web development. I believe that creative collaboration
              between design and technology is the way that to create better
              solutions.
            </p>
          </div>
          <div className="lg:w-1/2 lg:max-w-[352px]">
            <div className="hidden lg:block">
              <Image src={profilePicLarge} alt="My photo" />
            </div>
            <div className="block lg:hidden">
              <Image src={profilePicSmall} alt="My photo" />
            </div>
          </div>
        </section>
        <section className="lg:flex">
          <div className="mb-32 lg:w-1/2">
            <SectionTitle text="Education" />
            <EducationInfo
              school="Kyushu University"
              degree="Master of Design"
              period="Aprl 2014 - Feb 2017"
            />
            <EducationInfo
              school="Hubei University of Technology"
              degree="Bachelor of Electronic Information Engineering"
              period="Sep 2007 - August 2011"
            />
          </div>
          <div className="mb-32 lg:w-1/2">
            <SectionTitle text="Skills" />
            <SkillInfo
              title="Design"
              skills={[
                "Figma",
                "XD",
                "Sketch",
                "InVision",
                "Illustrator",
                "Photoshop",
                "InDesign",
              ]}
            />
            <SkillInfo
              title="Engineering"
              skills={[
                "HTML/CSS(SCSS)",
                "JavaScript",
                "TypeScript",
                "React",
                "NextJS",
                "Git",
                "WordPress",
              ]}
            />
            <SkillInfo
              title="Languages"
              skills={["Chinese", "English", "Japanese"]}
            />
          </div>
        </section>
        <section className="mb-32">
          <SectionTitle text="Contact" />
          <p className="mb-4 text-sm leading-7 text-slate-900 lg:text-base lg:leading-8">
            Whether you have a question or just want to say hi,{" "}
            <br className="hidden lg:block" />I will try my best to get back to
            you!
          </p>
          <ContainedButton
            textLabel="Start a conversation"
            href="mailto:mail.gaoshanghui@gmail.com"
          />
        </section>
        <SocialLinks />
      </div>
      <Footer />
    </>
  );
};

export default About;
