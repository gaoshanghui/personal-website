import Image from 'next/image';
import Link from 'next/link';
import ContainedButton from './buttons/contained-button';

const Card = ({ media, title, description, link }) => {
  return (
    <div className="">
      <div className="relative h-[calc(66vh)]">
        <Image
          src={media}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-project-cover-to-t" />
        <div className="absolute bottom-10 left-4">
          <h2 className="text-3xl leading-9 font-bold text-white drop-shadow-md mb-1">
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="text-base leading-6 font-normal text-white drop-shadow-md mb-4 max-w-[calc(100vw-72px)]">
            {description}
          </p>
          <ContainedButton textLabel="View Project" href={link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
