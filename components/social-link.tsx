interface SocialLinkProps {
  href: string;
  ariaLabel: string;
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      aria-label={props.ariaLabel}
    >
      <span className="inline-block rounded-full border border-gray-200 p-3">
        {props.children}
      </span>
    </a>
  );
};

export default SocialLink;
