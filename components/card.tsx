import Image from "next/image";
import ContainedButton from "./contained-button";

interface CardProps {
  title: string;
  description: string;
  darkText?: boolean;
  link: string;
  media: StaticImageData;
  mediaSmall: StaticImageData;
  priority: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  darkText,
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
        {!darkText && (
          <div className="absolute top-0 left-0 h-full w-full bg-project-overlay-small lg:bg-project-overlay-large" />
        )}
        {/* <div className="absolute top-0 left-0 h-full w-full bg-project-overlay-small lg:bg-project-overlay-large" /> */}
        <div className="absolute bottom-16 left-5 lg:bottom-[35%] lg:left-[10%]">
          {darkText ? (
            <>
              <h2 className="mb-1 text-[40px] font-black leading-[3rem] text-gray-900 drop-shadow-sm lg:text-[56px] lg:leading-[68px]">
                {title}
              </h2>
              <p className="mb-6 max-w-[calc(100vw-72px)] text-base font-normal text-gray-900 drop-shadow-sm lg:mb-6 lg:max-w-[460px] lg:text-[20px] lg:leading-7">
                {description}
              </p>
            </>
          ) : (
            <>
              <h2 className="mb-1 text-[40px] font-black leading-[3rem] text-white drop-shadow-sm lg:text-[56px] lg:leading-[68px]">
                {title}
              </h2>
              <p className="mb-6 max-w-[calc(100vw-72px)] text-base font-normal text-white drop-shadow-sm lg:mb-6 lg:max-w-[460px] lg:text-[20px] lg:leading-7">
                {description}
              </p>
            </>
          )}
          <ContainedButton textLabel="View case study" href={link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
