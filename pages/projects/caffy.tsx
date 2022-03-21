import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InPageNavigation from "../../components/in-page-navigation";
import Anchor from "../../components/anchor";
import Section from "../../components/section";

// Typography
import Headline2 from "../../components/headline-2";
import Headline3 from "../../components/headline-3";
import Headline4 from "../../components/headline-4";

// Image resources
import overViewImg from "../../public/images/caffy-overview.jpg";
import overViewLargeImg from "../../public/images/caffy-overview-large.jpg";
import personaLargeImg from "../../public/images/caffy-persona.png";
import personaProfileImg from "../../public/images/caffy-persona-profile.png";
import personaCommentImg from "../../public/images/caffy-persona-quotes.png";
import personaGoalsImg from "../../public/images/caffy-persona-goals.png";
import personaFrustrationsImg from "../../public/images/caffy-persona-frustrations.png";
import personaBioImg from "../../public/images/caffy-persona-bio.png";
import userFlowImg from "../../public/images/caffy-user-flow.png";
import paperWireframesImg from "../../public/images/caffy-paper-wireframes.jpg";
import digitalWireframesImg from "../../public/images/caffy-digital-wireframes.png";
import lowFiPrototypeImg from "../../public/images/caffy-low-fi-prototype.png";
import highFiPrototypeImg from "../../public/images/caffy-high-fi-prototype.png";
import styleGuideImg from "../../public/images/caffy-style-guide.png";
import styleGuideColumnImg from "../../public/images/caffy-style-guide-column.png";
import muckupsImg1 from "../../public/images/caffy-muckups-1.png";
import muckupsImg2 from "../../public/images/caffy-muckups-2.png";
import Headline1 from "../../components/headline-1";

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
      {/* Project hero - normal */}
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
              priority
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
              priority
            />
            <div className="absolute top-0 left-0 h-full w-full bg-[#0F172A] opacity-40"></div>
            <div className="absolute top-[calc(50%-54px)] left-[13%]">
              <div>
                <div className="mb-2 text-white drop-shadow-md">
                  <Headline1>Caffy</Headline1>
                </div>
                <h2 className="text-xl leading-8 text-white drop-shadow-md">
                  Design a Mobile Web app for a cafe
                </h2>
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
            <Headline2>Project Overview</Headline2>
          </div>
          <p className="body-1 mx-auto max-w-[760px] text-center text-slate-600">
            Caffy is a Mobile Web Application designed for cafes. In the current
            small-scale cafe business, online ordering either doesn&apos;t exist
            or is very outdated. Caffy serves information about the shop while
            providing an online ordering feature to improve the user experience.
          </p>
          <div className="mt-16 space-y-10 lg:mt-20 lg:flex lg:items-start lg:space-y-0">
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <Headline4>Project Name</Headline4>
              </div>
              <p className="body-1 text-center text-slate-600">
                Caffy
                <br />
                Mobile Web app
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <Headline4>Duration</Headline4>
              </div>
              <p className="body-1 text-center text-slate-600">
                2021.12 - 2022.02
                <br />
                (3 months)
              </p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <Headline4>Role</Headline4>
              </div>
              <p className="body-1 text-center text-slate-600">UX Designer</p>
            </div>
            <div className="mx-auto max-w-[260px]">
              <div className="text-center">
                <Headline4>Responsibilities</Headline4>
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
                for and their needs. A primary user group identified was working
                adults who used the cafe to rest and work.
              </p>
              <br />
              <p className="body-1 text-slate-600 lg:mx-auto lg:max-w-[760px] lg:text-center">
                Research revealed that shop environment and convenience are
                important to them. Environment aspects include the availability
                of Wi-Fi, sofas and the overall atmosphere. In terms of
                convenience, aspects such as waiting time and the ability to
                order easily and quickly became factors in whether they went to
                the shop.
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
                  <Headline4>Environment</Headline4>
                </div>
                <p className="body-1 text-slate-600 lg:text-center">
                  The environment and ambience of the actual shop is far from
                  what one would expect.
                </p>
              </div>
              <div className="max-w-md rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
                <div className="lg:text-center">
                  <Headline4>Convenience</Headline4>
                </div>
                <p className="body-1 text-slate-600 lg:text-center">
                  Orders must be placed in line at the cashier. Takeaway
                  customers cannot order in advance.
                </p>
              </div>
            </div>
          </div>

          {/* Persona */}
          <div>
            <div className="lg:text-center">
              <Headline3>Persona</Headline3>
            </div>
            {/* Persona - image */}
            <div className="hidden overflow-hidden rounded-lg border border-slate-300 sm:block">
              <Image
                src={personaLargeImg}
                alt="Wang's persona"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            {/* Persona - column images */}
            <div className="space-y-4 sm:hidden">
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
      </Section>

      {/* ================================ */}
      {/* Section: Starting the design */}
      {/* ================================ */}
      <Anchor id="Starting-the-design" />
      <Section>
        <div className="space-y-20 lg:space-y-28">
          <div>
            <div className="lg:text-center">
              <Headline2>Starting the design</Headline2>
            </div>
            <div className="lg:mx-auto lg:max-w-[760px] lg:text-center">
              <p className="body-1 text-slate-600">
                Before getting into the mockups and high-fidelity prototypes, I
                wanted to get an idea of what the core parts of the application
                would look like by creating user flows and wireframes.
              </p>
            </div>
          </div>
          <div>
            <div className="lg:text-center">
              <Headline3>User flow</Headline3>
            </div>
            <div>
              <div className="overflow-hidden rounded-lg border border-slate-300">
                <Image
                  src={userFlowImg}
                  alt="User flow"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 px-5">
                <p className="body-2 text-center text-slate-600">
                  User task: Use the mobile web app to place an order quickly
                  and easily.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:max-w-[400px]">
                <Headline3>Paper Wireframes</Headline3>
                <p className="body-1 text-slate-600">
                  Drafting iterations of each screen of the app on paper ensured
                  that the elements that made it to digital wireframes would be
                  well-suited to address user pain. I tried different layouts
                  and put them together to see how they worked together.
                </p>
              </div>
              <div className="pt-10 lg:max-w-[560px] lg:pt-0">
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-slate-300">
                    <Image
                      src={paperWireframesImg}
                      alt="Paper wireframe"
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <div className="mt-4 px-5">
                    <p className="body-2 text-center text-slate-600">
                      Stars were used to mark the elements of each sketch that
                      would be used in the initial digital wireframes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Headline3>Digital wireframes</Headline3>
            <div className="space-y-4">
              <div className="overflow-scroll">
                <div className="relative overflow-hidden rounded-lg border border-slate-300">
                  <Image
                    src={digitalWireframesImg}
                    alt="Digital wireframes"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              </div>
              <div>
                <div>
                  {/* image part */}
                  <div className="relative overflow-hidden rounded-lg border border-slate-300">
                    <Image
                      src={lowFiPrototypeImg}
                      alt="Low-fi prototype"
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  {/* caption part */}
                  <div className="mt-4 px-5">
                    <div className="lg:mx-auto lg:max-w-[760px] lg:text-center">
                      <p className="body-2 text-center text-slate-600">
                        Using the completed set of digital wireframes, I also
                        created a low-fidelity prototype. So the prototype could
                        be used in a usability study.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:max-w-[400px]">
                <Headline3>Usability study</Headline3>
                <p className="body-1 mb-10 text-slate-600">
                  I conducted two rounds of usability studies. Findings from the
                  first study helped guide the designs from wireframes to
                  mockups. The second study used a high-fidelity prototype and
                  revealed what aspects of the mockups needed refining.
                </p>
              </div>
              <div className="lg:max-w-[560px]">
                <div className="space-y-4">
                  <div className="rounded-lg border-[1px] border-slate-300 bg-[#fafaf9] py-4 px-6">
                    <Headline4>Round 1 findings</Headline4>

                    <ul className="list-disc pl-4">
                      <li>
                        <p className="body-1 text-slate-600">
                          Many people start placing orders from the order page
                        </p>
                      </li>
                      <li>
                        <p className="body-1 text-slate-600">
                          We can improve the details of the prototype to make
                          the application feel more real to the participants
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-slate-300 bg-[#fafaf9] py-4 px-6">
                    <Headline4>Round 2 findings</Headline4>
                    <ul className="list-disc pl-4">
                      <li>
                        <p className="body-1 text-slate-600">
                          Did not know the price per item until the end of the
                          order flow
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
          </div>
        </div>
      </Section>

      {/* ================================ */}
      {/* Refining the design */}
      {/* ================================ */}
      <Anchor id="Refining-the-design" />
      <Section>
        <div className="space-y-20 lg:space-y-28">
          <div className="lg:text-center">
            <Headline2>Refining the design</Headline2>
          </div>
          <div>
            <Headline3>Style Guide</Headline3>
            <div>
              <div className="block sm:hidden">
                <div className="relative overflow-hidden rounded-lg border border-slate-300">
                  <Image
                    src={styleGuideColumnImg}
                    alt="style guide"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
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
          <div>
            <Headline3>Muckups</Headline3>
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
          <div>
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:max-w-[400px]">
                <Headline3>Prototype</Headline3>
                <p className="body-1 mb-4 text-slate-600">
                  I created mockups in Figma and then converted them to a
                  high-fidelity prototype.
                </p>
                <a
                  href="https://www.figma.com/proto/k0otxFcksIbzoWlitRyU88/Mockups?page-id=310%3A582&node-id=310%3A585&viewport=262%2C48%2C0.25&scaling=scale-down&starting-point-node-id=310%3A585"
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
              <div className="w-full lg:max-w-[560px]">
                <div className="hidden md:block">
                  <div className="relative overflow-hidden rounded-lg border border-slate-300">
                    <iframe
                      className="h-[480px] w-full"
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk0otxFcksIbzoWlitRyU88%2FMockups%3Fpage-id%3D310%253A582%26node-id%3D310%253A585%26viewport%3D262%252C48%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D310%253A585"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="block md:hidden">
                  <div className="overflow-hidden rounded-lg border border-slate-300">
                    <Image
                      src={highFiPrototypeImg}
                      alt="High fidelity prototype image"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================================ */}
      {/* Section: Going forward */}
      {/* ================================ */}
      <Anchor id="Going-forward" />
      <Section>
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
                <Headline4>Understanding your users</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  The more you understand the user, the better you can find
                  design solutions. The primary difficulty I had while designing
                  this product was conducting user interviews. Through primary
                  user research, I can get some new information to help create a
                  solution in the future, even if I don&apos;t have the right
                  idea at the moment.
                </p>
              </div>
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>
                  The first ideas are only the beginning of the process
                </Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  While designing the Caffy app, I learned that the first ideas
                  for the app are only the beginning of the process. Usability
                  studies and feedbacks influenced each iteration of the
                  app&apos;s designs. Usability studies helped me understand how
                  real users interact with my designs and how well the product
                  meets their needs.
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
                <Headline4>Further iterations and usability tests</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  Conduct another round of usability studies to validate whether
                  the pain points users experienced have been effectively
                  addressed.
                </p>
              </div>
              <div className="lg:mx-auto lg:max-w-[760px]">
                <Headline4>More research</Headline4>
                <p className="body-1 mb-4 text-slate-600">
                  Take more factors (e.g., different age groups, occupations)
                  and stakeholders into account. And develop further user
                  personas and empathy maps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Caffy;
