import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Section from "../components/section";
import ContainedButton from "../components/contained-button";
import Headline2 from "../components/headline-2";
import EducationInfo from "../components/education-info";
import SocialLinks from "../components/social-links";
import profileImgLarge from "../public/images/profile.jpg";
import profileImg from "../public/images/profile-small.jpg";
import SkillInfo from "../components/skill-info";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. I love the design and I'm excited about new
          technologies. Whether you have a question or just want to say hi, I will try my best to get back to you!"
        />
      </Head>
      <Header />
      <div className="mx-auto mt-[68px] max-w-[1040px] lg:mt-[88px] lg:p-0">
        <Section>
          <p className="mb-10 font-sans-cn text-2xl font-bold tracking-[0.12em] text-slate-900">
            👋 你好！
          </p>
          <div className="lg:flex lg:items-start lg:justify-between">
            <div className="w-full lg:max-w-[552px]">
              <div className="mb-6">
                <h1 className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  My name is Gao Shanghui.
                </h1>
              </div>
              <div className="mb-6">
                <p className="body-1 text-slate-600">
                  I am originally from China. After completing my undergraduate studies, I chose to pursue further education abroad and earned a master&apos;s degree in design from Kyushu University. My research focused on utilizing machine learning to identify data patterns on social networking platforms and exploring innovative ways to present this information in an engaging and easily understandable manner.
                  <br />
                  <br />
                  Over the past few years, I have been dedicated to studying and researching user experience design, user interface design, and modern JavaScript-based web development. I am passionate about design and enthusiastic about new technologies. I firmly believe that design and development are inseparable, and their creative collaboration results in superior solutions.
                </p>
              </div>
            </div>
            <div className="relative block max-w-lg overflow-hidden rounded-lg drop-shadow lg:hidden">
              <Image
                src={profileImg}
                alt="My profile image"
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
            <div className="relative hidden w-1/2 max-w-[360px] overflow-hidden rounded-lg drop-shadow lg:block">
              <Image
                src={profileImgLarge}
                alt="My profile image"
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <Headline2>Education</Headline2>
              <EducationInfo
                school="Kyushu University"
                degree="Master of Design"
                period="April 2014 - March 2017"
              />
              <EducationInfo
                school="Hubei University of Technology"
                degree="Bachelor of Electronic Information Engineering"
                period="September 2007 - August 2011"
              />
            </div>
            <div className="lg:w-1/2">
              <Headline2>Skills</Headline2>
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
                title="Development"
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
          </div>
        </Section>
        <Section>
          <Headline2>Contact</Headline2>
          <p className="body-1 mb-6 text-slate-600">
            Whether you have a question or just want to say hi,{" "}
            <br className="hidden lg:block" />I will try my best to get back to
            you!
          </p>
          <ContainedButton
            textLabel="Start a conversation"
            href="mailto:mail.gaoshanghui@gmail.com"
          />
        </Section>
        <SocialLinks />
      </div>
      <Footer />
    </>
  );
};

export default About;
