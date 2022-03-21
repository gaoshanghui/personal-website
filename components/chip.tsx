interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  return (
    <span className="mr-[14px] mb-[14px] inline-block rounded-full bg-gray-800 py-[6px] px-5 text-sm leading-5 text-white lg:text-base">
      {props.text}
    </span>
  );
};

export default Chip;
