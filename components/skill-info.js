import Chip from "./chip/chip";

const SkillInfo = (props) => {
  return (
    <div className="mb-8">
      <p className="text-xl lg:text-2xl leading-7 lg:leading-8 text-gray-900 mb-4">
        {props.title}
      </p>
      <div>
        {props.skills.map((skill) => (
          <Chip key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillInfo;
