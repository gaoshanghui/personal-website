interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <h3 className="mb-8 text-3xl font-black leading-9 text-slate-900 lg:mb-10 lg:text-4xl lg:leading-10">
      {props.text}
    </h3>
  );
};

export default SectionTitle;
