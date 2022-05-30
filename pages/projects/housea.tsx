import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";

// Images used in this page
import overviewImage from "../../public/images/housea-overview.png";
// import overviewBackgroundImage from "../../public/images/housea-overview-bg.png";

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
      <div className="mt-[68px] hidden lg:mt-[88px] lg:block lg:p-0">
        <div className="relative bg-[url('/images/housea-overview-bg.png')]">
          <h1 className="mx-auto max-w-[1040px] pt-20 pb-4">
            <span className="text-[28px] font-black leading-8 text-slate-900 block">Housea</span>
            <span className="body-1 text-slate-900 block">Design a website for finding rental apartments</span>
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
    </div>
  );
};

export default Housea;
