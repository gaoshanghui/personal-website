interface EducationInfoProps {
  school: string;
  degree: string;
  period: string;
}

const EducationInfo: React.FC<EducationInfoProps> = (props) => {
  return (
    <div className="mb-8">
      <p className="text-xl lg:text-2xl leading-7 lg:leading-8 text-gray-900 mb-4">
        {props.school}
      </p>
      <p className="text-base leading-6 text-gray-600 mb-2">{props.degree}</p>
      <p className="text-base leading-6 text-gray-600 italic">{props.period}</p>
    </div>
  );
};

export default EducationInfo;
