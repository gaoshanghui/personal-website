import Link from 'next/link';

const ContainedButton = ({ textLabel, href }) => {
  return (
    <Link href={href}>
      <a
        role="button"
        className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-lg shadow-md text-sm leading-5 font-bold"
      >
        {textLabel}
      </a>
    </Link>
  );
};

export default ContainedButton;
