const Footer: React.FC = () => {
  return (
    <footer className="py-4 border-t">
      <p className="text-sm leading-5 font-bold text-center text-gray-900">
        Designed & Built by Gao Shanghui
      </p>
      <p className="text-sm leading-5 font-normal text-center text-gray-600">
        Curious about the source code? You can{' '}
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
