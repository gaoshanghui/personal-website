interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <h3 className="text-3xl leading-9 font-black text-gray-900 mb-8 lg:text-4xl lg:leading-10 lg:mb-10">
      {props.text}
    </h3>
  );
};

export default SectionTitle;
