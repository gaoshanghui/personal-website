import Image from "next/image";
import ContainedButton from "./contained-button";

interface CardProps {
  title: string;
  description: string;
  link: string;
  media: StaticImageData;
  mediaSmall: StaticImageData;
  priority: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  media,
  mediaSmall,
  priority,
}) => {
  return (
    <div>
      <div className="relative h-[calc(66vh)] lg:max-h-[800px]">
        <div className="relative block h-full lg:hidden">
          <Image
            src={mediaSmall}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority={priority}
          />
        </div>
        <div className="relative hidden h-full lg:block">
          <Image
            src={media}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority={priority}
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-project-overlay-small lg:bg-project-overlay-large" />
        <div className="absolute bottom-16 left-5 lg:bottom-[20%] lg:left-[10%]">
          <h2 className="mb-1 text-[40px] font-black leading-[3rem] tracking-[0.01em] text-white drop-shadow lg:mb-2 lg:text-5xl">
            <a>{title}</a>
          </h2>
          <p className="mb-4 max-w-[calc(100vw-72px)] text-base font-normal text-white drop-shadow lg:mb-6 lg:text-2xl">
            {description}
          </p>
          <ContainedButton textLabel="View case study" href={link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
