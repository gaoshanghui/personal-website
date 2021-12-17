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
      <span className="inline-block p-3 border border-gray-200 rounded-full">
        {props.children}
      </span>
    </a>
  );
};

export default SocialLink;
