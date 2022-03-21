import Link from "next/link";

interface Step {
  title: string;
  href: string;
}

interface InPageNavigationProps {
  steps: Step[];
}

const InPageNavigation: React.FC<InPageNavigationProps> = ({ steps }) => {
  return (
    <div className="sticky top-[68px] z-10 overflow-scroll bg-white bg-opacity-95 drop-shadow-[0_1px_0px_rgba(0,0,0,0.12)] backdrop-blur-lg lg:top-[88px]">
      <div className="mx-auto max-w-[1040px] overflow-auto">
        <div className="flex p-5">
          {steps.map((step, index) => {
            return (
              <div className="mr-6 flex items-center" key={index}>
                <Link href={step.href}>
                  <a className="cursor-pointer">
                    <div className="flex items-center">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400">
                        <span className="text-sm font-bold leading-3 text-white">
                          {index + 1}
                        </span>
                      </div>
                      <p className="ml-3 mr-6 whitespace-nowrap text-sm font-bold leading-6 tracking-[0.01em] text-slate-900 hover:underline">
                        {step.title}
                      </p>
                    </div>
                  </a>
                </Link>
                {index !== steps.length - 1 && (
                  <div className="h-[1px] w-12 bg-slate-300"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InPageNavigation;
