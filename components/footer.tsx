const Footer: React.FC = () => {
  return (
    <footer className="border-t py-4">
      <p className="text-center text-sm font-bold leading-5 text-slate-900">
        Designed & Built by Gao Shanghui
      </p>
      <p className="text-center text-sm font-normal leading-5 text-slate-600">
        Curious about the source code? You can{" "}
        <a
          href="https://github.com/gaoshanghui/portfolio-website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          find it here
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
