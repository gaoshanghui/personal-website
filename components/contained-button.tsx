import Link from 'next/link';

interface ContainedButtonProps {
  textLabel: string;
  href: string;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({
  textLabel,
  href,
}) => {
  return (
    <Link href={href}>
      <a
        role="button"
        className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-5 lg:px-6 py-3 lg:py-4 rounded-lg shadow-md text-sm lg:text-base leading-5 font-bold"
      >
        {textLabel}
      </a>
    </Link>
  );
};

export default ContainedButton;
