interface EducationInfoProps {
  school: string;
  degree: string;
  period: string;
}

const EducationInfo: React.FC<EducationInfoProps> = (props) => {
  return (
    <div className="mb-8">
      <p className="mb-4 text-xl leading-7 text-slate-900 lg:text-2xl lg:leading-8">
        {props.school}
      </p>
      <p className="mb-2 text-base leading-6 text-slate-600">{props.degree}</p>
      <p className="text-base italic leading-6 text-slate-600">
        {props.period}
      </p>
    </div>
  );
};

export default EducationInfo;
