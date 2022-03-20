interface Headline2Props {
  children: React.ReactNode;
}

const Headline2: React.FC<Headline2Props> = ({ children }) => {
  return (
    <h2 className="pb-8 pt-20 text-[32px] font-black leading-10 text-slate-900 lg:text-[40px]">
      {children}
    </h2>
  );
};

export default Headline2;
