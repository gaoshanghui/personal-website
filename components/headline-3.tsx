interface Headline3Props {
  children: React.ReactNode;
}

const Headline3: React.FC<Headline3Props> = ({ children }) => {
  return (
    <h3 className="pb-6 text-[28px] font-black leading-8 text-slate-900">
      {children}
    </h3>
  );
};

export default Headline3;
