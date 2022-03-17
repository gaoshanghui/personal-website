import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";

// image resources
import overViewImg from "../../public/images/caffy-overview.jpg";
import personaProfileImg from "../../public/images/caffy-persona-profile.jpg";
import personaCommentImg from "../../public/images/caffy-persona-comment.jpg";
import personaGoalsImg from "../../public/images/caffy-persona-goals.jpg";
import personaFrustrationsImg from "../../public/images/caffy-persona-frustrations.jpg";
import personaBioImg from "../../public/images/caffy-persona-bio.jpg";
import userFlowImg from "../../public/images/caffy-userflow.jpg";
import paperWireframesImg from "../../public/images/caffy-paper-wireframes.jpg";
import digitalWireframesImg from "../../public/images/caffy-digital-wireframes.jpg";
import lowFiPrototypeImg from "../../public/images/caffy-low-fi-prototype.jpg";

const Caffy: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Case Study | Gao Shanghui</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Gao Shanghui. Whether you have a question or just want to say hi, I will try my best to get back to you!"
        />
      </Head>
      <Header />
      <div className="mx-auto mt-[68px] max-w-[1040px] lg:mt-[88px] lg:p-0">
        <div className="px-5 py-12">
          <h2 className="mb-2 text-[40px] font-black leading-[48px] tracking-[0.01em] text-slate-900">
            Caffy
          </h2>
          <p className="body-1 text-slate-600">
            Design a Mobile Web app for a cafe
          </p>
        </div>
      </div>
      <Image
        src={overViewImg}
        alt="Caffy application screenshots"
        layout="responsive"
        objectFit="cover"
      />

      {/* Project Overview */}
      <div className="bg-[#FAFAF9] px-5 py-24">
        <h2 className="headline-2 mb-8 text-center">Project Overview</h2>
        <p className="body-1 text-center text-slate-600">
          Caffy is a Mobile Web Application designed for cafes. In the current
          small-scale cafe business, online ordering either doesn't exist or is
          very outdated. Caffy serves information about the shop while providing
          an online ordering feature to improve the user experience.
        </p>
        <div className="mt-11 space-y-10">
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

      {/* In page navigation */}
      <div className="sticky top-[68px] z-10 overflow-scroll bg-white bg-opacity-95 drop-shadow-[0_1px_0px_rgba(0,0,0,0.12)] backdrop-blur-lg">
        <div className="flex p-5">
          {/* In page navigation - item */}
          <div className="mr-6 flex w-fit items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400">
              <span className="text-sm font-bold leading-3 text-white">1</span>
            </div>
            <p className="ml-3 mr-6 whitespace-nowrap text-sm font-bold leading-6 tracking-[0.01em] text-slate-900">
              Understanding the user
            </p>
            <div className="h-[1px] w-12 bg-slate-300"></div>
          </div>
          {/* In page navigation - item */}
          <div className="mr-6 flex w-fit items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400">
              <span className="text-sm font-bold leading-3 text-white">2</span>
            </div>
            <p className="ml-3 mr-6 whitespace-nowrap text-sm font-bold leading-6 tracking-[0.01em] text-slate-900">
              Starting the design
            </p>
            <div className="h-[1px] w-12 bg-slate-300"></div>
          </div>
          {/* In page navigation - item */}
          <div className="mr-6 flex w-fit items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400">
              <span className="text-sm font-bold leading-3 text-white">3</span>
            </div>
            <p className="ml-3 mr-6 whitespace-nowrap text-sm font-bold leading-6 tracking-[0.01em] text-slate-900">
              Refining the design
            </p>
            <div className="h-[1px] w-12 bg-slate-300"></div>
          </div>
          {/* In page navigation - item */}
          <div className="mr-6 flex w-fit items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400">
              <span className="text-sm font-bold leading-3 text-white">4</span>
            </div>
            <p className="ml-3 mr-6 whitespace-nowrap text-sm font-bold leading-6 tracking-[0.01em] text-slate-900">
              Going forward
            </p>
            {/* <div className="h-[1px] w-12 bg-slate-300"></div> */}
          </div>
        </div>
      </div>

      <div className="pt-[120px]">
        <div className="px-5">
          <h2 className="headline-2 mb-8 text-slate-900">
            Understanding the user
          </h2>
          <p className="body-1 text-slate-600">
            I conducted interviews to understand the users I am designing for
            and their needs. A primary user group identified was working adults
            who used the cafe to rest and work. Research revealed that shop
            environment and convenience are important to them. Environment
            aspects include the availability of Wi-Fi, sofas and the overall
            atmosphere. In terms of convenience, aspects such as waiting time
            and the ability to order easily and quickly became factors in
            whether they went to the shop.
          </p>
        </div>
        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Pain points</h3>
          <div className="space-y-4">
            <div className="rounded-lg border-[1px] border-slate-300 bg-[#fafaf9] p-4">
              <h4 className="headline-4 mb-2 text-slate-900">Environment</h4>
              <p className="body-1 text-slate-600">
                The environment and ambience of the actual shop is far from what
                one would expect.
              </p>
            </div>
            <div className="rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
              <h4 className="headline-4 mb-2 text-slate-900">Convenience</h4>
              <p className="body-1 text-slate-600">
                Orders must be placed in line at the cashier. Takeaway customers
                cannot order in advance.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 pt-20">
          <h3 className="headline-3 mb-6 text-slate-900">Persona</h3>
          <div className="space-y-4">
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

      {/* ================================ */}
      {/* Starting the design */}
      {/* ================================ */}
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
            <div className="rounded-lg border-[1px] border-slate-300 bg-[#fafaf9] p-4">
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
            <div className="rounded-lg border border-slate-300 bg-[#fafaf9] p-4">
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

      <Footer />
    </div>
  );
};

export default Caffy;
