const SocialLink = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <span className="inline-block p-3 border border-gray-200 rounded-full">
        {/* Social link component has a svg child */}
        {props.children}
      </span>
    </a>
  );
};

export default SocialLink;
