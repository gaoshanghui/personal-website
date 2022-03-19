import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InPageNavigation from "../../components/in-page-navigation";

// image resources
import overViewImg from "../../public/images/caffy-overview.jpg";
import overViewLargeImg from "../../public/images/caffy-overview-large.jpg";
import personaProfileImg from "../../public/images/caffy-persona-profile.jpg";
import personaCommentImg from "../../public/images/caffy-persona-comment.jpg";
import personaGoalsImg from "../../public/images/caffy-persona-goals.jpg";
import personaFrustrationsImg from "../../public/images/caffy-persona-frustrations.jpg";
import personaBioImg from "../../public/images/caffy-persona-bio.jpg";
import personaLargeImg from "../../public/images/caffy-persona-large.png";
import userFlowImg from "../../public/images/caffy-userflow.jpg";
import paperWireframesImg from "../../public/images/caffy-paper-wireframes.jpg";
import digitalWireframesImg from "../../public/images/caffy-digital-wireframes.jpg";
import lowFiPrototypeImg from "../../public/images/caffy-low-fi-prototype.jpg";
import styleGuideImg from "../../public/images/caffy-style-guide.jpg";
import muckupsImg1 from "../../public/images/caffy-muckups-1.jpg";
import muckupsImg2 from "../../public/images/caffy-muckups-2.jpg";

const Caffy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Case Study | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This is the case study of Caffy. Caffy is a Mobile Web application designed for cafes. Caffy serves information about the shop while providing an online ordering feature to improve the user experience."
        />
      </Head>
      <Header />
      {/* ==================== */}
      {/* Project Hero */}
      {/* ==================== */}
      {/* Project hero */}
      <div className="mx-auto mt-[68px] max-w-[1040px] lg:mt-[88px] lg:p-0">
        <div className="lg:hidden">
          <div className="px-5 py-12">
            <h2 className="mb-2 text-[40px] font-black leading-[48px] tracking-[0.01em] text-slate-900">
              Caffy
            </h2>
            <p className="body-1 text-slate-600">
              Design a Mobile Web app for a cafe
            </p>
          </div>
          <div>
            <Image
              src={overViewImg}
              alt="Caffy application screenshots"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* Project hero - large */}
      <div className="mt-[68px] hidden lg:mt-[88px] lg:block lg:p-0">
        <div className="bg-[#111827]">
          <div className="relative mx-auto max-w-[1440px]">
            <Image
              src={overViewLargeImg}
              alt="Caffy application screenshots"
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-[#0F172A] opacity-40"></div>
            <div className="absolute top-[calc(50%-54px)] left-[13%]">
              <div>
                <h2 className="headline-1 mb-2 text-white drop-shadow-md">
                  Caffy
                </h2>
                <p className="text-xl leading-8 text-white drop-shadow-md">
                  Design a Mobile Web app for a cafe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-[#FAFAF9] px-5 py-24 lg:py-32">
        <div className="mx-auto max-w-[1040px]">
          <h2 className="headline-2 mb-8 text-center">Project Overview</h2>
          <p className="body-1 mx-auto max-w-[760px] text-center text-slate-600">
            Caffy is a Mobile Web Application designed for cafes. In the current
            small-scale cafe business, online ordering either doesn&apos;t exist
            or is very outdated. Caffy serves information about the shop while
            providing an online ordering feature to improve the user experience.
          </p>
          <div className="mt-16 space-y-10 lg:mt-20 lg:flex lg:items-start lg:space-y-0">
            <div className="mx-auto max-w-[260px]">
              <h4 className="headline-4 mb-1 text-center">Project Name</h4>
              <p className="body-1 text-center text-slate-600">
                Caffy
                <br />
                Mobile Web app
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <h4 className="headline-4 mb-1 text-center">Duration</h4>
              <p className="body-1 text-center text-slate-600">
                2021.12 - 2022.02
                <br />
                (3 months)
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <h4 className="headline-4 mb-1 text-center">Role</h4>
              <p className="body-1 text-center text-slate-600">UX Designer</p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <h4 className="headline-4 mb-1 text-center">Responsibilities</h4>
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
      {/* Understanding the user */}
      {/* ================================ */}
      <div id="Understanding-the-user" className="anchor"></div>
      <div className="pt-[120px] lg:pt-44">
        <div className="mx-auto max-w-[1040px]">
          <div className="px-5">
            <h2 className="headline-2 mb-8 text-slate-900 lg:text-center">
              Understanding the user
            </h2>
            <p className="body-1 max-w-[760px] text-slate-600 lg:mx-auto lg:text-center">
              I conducted interviews to understand the users I am designing for
              and their needs. A primary user group identified was working
              adults who used the cafe to rest and work.
            </p>
            <br />
            <p className="body-1 max-w-[760px] text-slate-600 lg:mx-auto lg:text-center">
              Research revealed that shop environment and convenience are
              important to them. Environment aspects include the availability of
              Wi-Fi, sofas and the overall atmosphere. In terms of convenience,
              aspects such as waiting time and the ability to order easily and
              quickly became factors in whether they went to the shop.
            </p>
          </div>

          {/* Pain points */}
          <div className="px-5 pt-20 lg:pt-28">
            <h3 className="headline-3 mb-6 text-slate-900 lg:text-center">
              Pain points
            </h3>
            <div className="space-y-4 lg:flex lg:justify-center lg:space-y-0 lg:space-x-4">
              <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                <h4 className="headline-4 mb-2 text-slate-900 lg:text-center">
                  Environment
                </h4>
                <p className="body-1 text-slate-600 lg:text-center">
                  The environment and ambience of the actual shop is far from
                  what one would expect.
                </p>
              </div>
              <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                <h4 className="headline-4 mb-2 text-slate-900 lg:text-center">
                  Convenience
                </h4>
                <p className="body-1 text-slate-600 lg:text-center">
                  Orders must be placed in line at the cashier. Takeaway
                  customers cannot order in advance.
                </p>
              </div>
            </div>
          </div>

          {/* Persona */}
          <div className="px-5 pt-20 lg:pt-28">
            <h3 className="headline-3 mb-6 text-slate-900 lg:text-center">
              Persona
            </h3>
            <div className="hidden overflow-hidden rounded-lg border border-slate-300 lg:block">
              <Image
                src={personaLargeImg}
                alt="Wang's persona"
                layout="responsive"
                objectFit="cover"
              />
            </div>

            {/* Persona - vertical align */}
            <div className="space-y-4 lg:hidden">
              <div className="relative overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={personaProfileImg}
                  alt="Persona wang's basic information"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={personaCommentImg}
                  alt="Persona wang's comment"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={personaGoalsImg}
                  alt="Persona wang's goals"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={personaFrustrationsImg}
                  alt="Persona wang's frustrations"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={personaBioImg}
                  alt="Persona wang's bio"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ */}
      {/* Starting the design */}
      {/* ================================ */}
      <div id="Starting-the-design" className="anchor"></div>
      <div className="pt-[120px]">
        <div className="px-5">
          <h2 className="headline-2 mb-8 text-slate-900">
            Starting the design
          </h2>
          <p className="body-1 text-slate-600">
            Before getting into the mockups and high-fidelity prototypes, I
            wanted to get an idea of what the core parts of the application
            would look like by creating user flows and wireframes.
          </p>
        </div>
        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">User flow</h3>
        </div>
        {/* Scrollable image block */}
        <div>
          {/* image part */}
          <div className="overflow-scroll">
            <div className="relative mx-5 h-[320px] w-[820px] overflow-hidden rounded-lg border border-slate-300">
              <Image
                src={userFlowImg}
                alt="Caffy User flow"
                objectFit="cover"
              />
            </div>
          </div>
          {/* caption part */}
          <div className="mt-4 px-5">
            <p className="body-2 text-center text-slate-600">
              User task: Use the mobile web app to place an order quickly and
              easily.
            </p>
          </div>
        </div>

        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Paper Wireframes</h3>
          <p className="body-1 text-slate-600">
            Drafting iterations of each screen of the app on paper ensured that
            the elements that made it to digital wireframes would be well-suited
            to address user pain. I tried different layouts and put them
            together to see how they worked together.
          </p>
        </div>
        {/* Responsive image block */}
        <div className="pt-10">
          <div>
            {/* image part */}
            <div className="relative mx-5 overflow-hidden rounded-lg border border-slate-300">
              <Image
                src={paperWireframesImg}
                alt="Paper wireframe"
                objectFit="cover"
                layout="responsive"
              />
            </div>
            {/* caption part */}
            <div className="mt-4 px-5">
              <p className="body-2 text-center text-slate-600">
                Stars were used to mark the elements of each sketch that would
                be used in the initial digital wireframes.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Digital wireframes</h3>
        </div>

        <div className="space-y-4">
          {/* Scrollable image block */}
          <div>
            {/* image part */}
            <div className="overflow-scroll">
              <div className="relative mx-5 h-[320px] w-[750px] overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={digitalWireframesImg}
                  alt="Digital wireframes"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          {/* Responsive image block */}
          <div>
            <div>
              {/* image part */}
              <div className="relative mx-5 overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={lowFiPrototypeImg}
                  alt="Low-fi prototype"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              {/* caption part */}
              <div className="mt-4 px-5">
                <p className="body-2 text-center text-slate-600">
                  Using the completed set of digital wireframes, I also created
                  a low-fidelity prototype. So the prototype could be used in a
                  usability study.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Usability study</h3>
          <p className="body-1 mb-10 text-slate-600">
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the designs from wireframes to mockups. The
            second study used a high-fidelity prototype and revealed what
            aspects of the mockups needed refining.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border-[1px] border-slate-300 bg-[#fafaf9] py-4 px-6">
              <h4 className="headline-4 mb-2 text-slate-900">
                Round 1 findings
              </h4>
              <ul className="list-disc pl-4">
                <li>
                  <p className="body-1 text-slate-600">
                    Many people start placing orders from the order page
                  </p>
                </li>
                <li>
                  <p className="body-1 text-slate-600">
                    We can improve the details of the prototype to make the
                    application feel more real to the participants
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-300 bg-[#fafaf9] py-4 px-6">
              <h4 className="headline-4 mb-2 text-slate-900">
                Round 2 findings
              </h4>
              <ul className="list-disc pl-4">
                <li>
                  <p className="body-1 text-slate-600">
                    Did not know the price per item until the end of the order
                    flow
                  </p>
                </li>
                <li>
                  <p className="body-1 text-slate-600">
                    Add an order history function
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ */}
      {/* Refining the design */}
      {/* ================================ */}
      <div id="Refining-the-design" className="anchor"></div>
      <div className="pt-[120px]">
        <div className="px-5">
          <h2 className="headline-2 text-slate-900">Refining the design</h2>
        </div>
        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Usability study</h3>
          {/* Responsive image block */}
          <div>
            <div>
              {/* image part */}
              <div className="relative overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={styleGuideImg}
                  alt="style guide"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Muckups</h3>
          <div className="space-y-4">
            {/* Responsive image block */}
            <div>
              <div>
                {/* image part */}
                <div className="relative overflow-hidden rounded-lg border border-slate-300">
                  <Image
                    src={muckupsImg1}
                    alt="muckups 1"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            {/* Responsive image block */}
            <div>
              <div>
                {/* image part */}
                <div className="relative overflow-hidden rounded-lg border border-slate-300">
                  <Image
                    src={muckupsImg2}
                    alt="muckups 2"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Caffy;
