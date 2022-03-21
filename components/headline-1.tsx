interface Headline1Props {
  children: React.ReactNode;
}

const Headline1: React.FC<Headline1Props> = ({ children }) => {
  return <h1 className="text-[56px] font-black leading-[68px]">{children}</h1>;
};

export default Headline1;
