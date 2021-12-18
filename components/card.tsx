import Image from 'next/image';
import Link from 'next/link';
import ContainedButton from './contained-button';

interface CardProps {
  media: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ media, title, description, link }) => {
  return (
    <div className="">
      <div className="relative h-[calc(66vh)] lg:max-h-[800px]">
        <Image
          src={media}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-project-overlay-small lg:bg-project-overlay-large" />
        <div className="absolute bottom-10 lg:bottom-[20%] left-4 lg:left-[10%]">
          <h2 className="text-3xl lg:text-5xl font-bold text-white drop-shadow-md mb-1 lg:mb-2">
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="text-base lg:text-2xl font-normal text-white drop-shadow-md mb-4 lg:mb-6 max-w-[calc(100vw-72px)]">
            {description}
          </p>
          <ContainedButton textLabel="View case study" href={link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
