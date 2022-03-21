import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import ContainedButton from "../components/contained-button";
import Headline2 from "../components/headline-2";
import EducationInfo from "../components/education-info";
import SocialLinks from "../components/social-links";
import profileImgLarge from "../public/images/profile.jpg";
import profileImg from "../public/images/profile-small.jpg";
import SkillInfo from "../components/skill-info";
import Headline4 from "../components/headline-4";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. Whether you have a question or just want to say hi, I will try my best to get back to you!"
        />
      </Head>
      <Header />
      <div className="mx-auto mt-[68px] max-w-[1040px] p-5 lg:mt-[88px] lg:p-0">
        <section className="mb-[120px] pt-16 lg:mb-44 lg:pt-28">
          <p className="mb-10 font-sans-cn text-2xl font-bold tracking-[0.12em] text-slate-900">
            👋 你好！
          </p>
          <div className="lg:flex lg:items-start lg:justify-between">
            <div className="w-full lg:max-w-[552px]">
              <div className="mb-6">
                <Headline4>My name is Gao Shanghui.</Headline4>
              </div>
              <div className="mb-6">
                <p className="body-1 text-slate-600">
                  I came from China. After I finished my undergraduate studies,
                  I chose to study abroad. I completed a graduate program in
                  design at Kyushu University. At the same time, my research
                  focused on using machine learning to uncover data patterns on
                  social networking platforms and exploring approaches to
                  present them in an engaging and easy-to-understand way.
                  <br />
                  <br />
                  For the past few years, I have been studying user experience
                  design, user interface design, and modern JavaScript-based web
                  development. I love the design and I&apos;m excited about new
                  technologies. I have always believed that design and
                  development is one thing, and that their creative
                  collaboration is the way to create better solutions.
                </p>
              </div>
            </div>
            <div className="relative block max-w-lg overflow-hidden rounded-lg drop-shadow lg:hidden">
              <Image
                src={profileImg}
                alt="My profile image"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="relative hidden w-1/2 max-w-[360px] overflow-hidden rounded-lg drop-shadow lg:block">
              <Image
                src={profileImgLarge}
                alt="My profile image"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
        <section className="lg:flex">
          <div className="mb-32 lg:w-1/2">
            <Headline2>Education</Headline2>
            {/* <Headline2 text="Education" /> */}
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
            <Headline2>Skills</Headline2>
            {/* <Headline2 text="Skills" /> */}
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
          <Headline2>Contact</Headline2>
          {/* <Headline2 text="Contact" /> */}
          <p className="body-1 mb-6 text-slate-600">
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
