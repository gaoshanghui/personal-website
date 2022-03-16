import Image from "next/image";
import Link from "next/link";
import ContainedButton from "./contained-button";

interface CardProps {
  media: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ media, title, description, link }) => {
  return (
    <div className="">
      <div className="relative h-[calc(66vh)] lg:max-h-[800px]">
        <Image src={media} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 h-full w-full bg-project-overlay-small lg:bg-project-overlay-large" />
        <div className="absolute bottom-10 left-4 lg:bottom-[20%] lg:left-[10%]">
          <h2 className="mb-1 text-3xl font-bold text-white drop-shadow-md lg:mb-2 lg:text-5xl">
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="mb-4 max-w-[calc(100vw-72px)] text-base font-normal text-white drop-shadow-md lg:mb-6 lg:text-2xl">
            {description}
          </p>
          <ContainedButton textLabel="View case study" href={link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
