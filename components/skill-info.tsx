import Chip from "./chip";

interface SkillInfoProps {
  skills: string[];
  title: string;
}

const SkillInfo: React.FC<SkillInfoProps> = (props) => {
  return (
    <div className="mb-8">
      <p className="mb-4 text-xl leading-7 text-slate-900 lg:text-2xl lg:leading-8">
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
