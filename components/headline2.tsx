interface Headline2Props {
  text: string;
}

const Headline2: React.FC<Headline2Props> = (props) => {
  return (
    <h2 className="headline-2 mb-8 text-slate-900 lg:mb-10">{props.text}</h2>
  );
};

export default Headline2;
