interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="py-12 lg:py-24">
      <div className="mx-auto max-w-[1040px] px-5">{children}</div>
    </section>
  );
};

export default Section;
