import Link from "next/link";

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
        className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold leading-5 tracking-[0.02em] text-white shadow-md transition hover:bg-blue-700 lg:px-6 lg:py-4 lg:text-base lg:tracking-[0.01em]"
      >
        {textLabel}
      </a>
    </Link>
  );
};

export default ContainedButton;
