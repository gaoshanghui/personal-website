interface AnchorProps {
  id: string;
}

const Anchor: React.FC<AnchorProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="invisible relative top-[-68px] block lg:top-[-88px]"
    ></div>
  );
};

export default Anchor;
