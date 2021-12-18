interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  return (
    <span className="inline-block text-white text-sm lg:text-base leading-5 py-[6px] px-5 bg-gray-800 rounded-full mr-[14px] mb-[14px]">
      {props.text}
    </span>
  );
};

export default Chip;
