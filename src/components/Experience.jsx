
const Stat = ({ number, title, subtitle, size = "md" }) => {
  const numberClasses =
    size === "lg"
      ? "text-7xl md:text-[8rem] font-zentry font-black leading-none"
      : "text-5xl md:text-7xl font-zentry font-black leading-none";

  return (
    <div className="flex items-center gap-6">
      <div className={`${numberClasses} text-white`}>{number}</div>
      <div className="leading-tight">
        <div className="text-sm font-medium text-blue-50">{title}</div>
        {subtitle && (
          <div className="text-xs text-neutral-400 mt-1">{subtitle}</div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="my-20 w-screen px-10">
        <h3 className="relative special-font text-5xl px-48  text-blue-100"><b>E</b>xperience</h3>
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid that places the three stats similar to the mock */}
          <div className="grid grid-cols-3 grid-rows-2 gap-6 items-start">
            {/* Top-left: 150+ Projects */}
            <div className="col-start-1 row-start-1 flex items-center">
              <div className="border-l border-white/10 pl-6">
                <Stat number={"150+"} title={"Projects"} subtitle={"Delivered worldwide"} size="lg" />
              </div>
            </div>

            {/* Top-right: 8 Years */}
            <div className="col-start-3 row-start-1 flex items-center justify-end">
              <div className="text-right">
                <div className="border-r border-white/10 pr-6 inline-block">
                  <Stat number={"8"} title={"Years"} subtitle={"Of innovation"} size="lg" />
                </div>
              </div>
            </div>

            {/* Bottom-left: 12 Awards */}
            <div className="col-start-1 row-start-2 flex items-center mt-12">
              <div className="border-l border-white/10 pl-6">
                <Stat number={"12"} title={"Awards"} subtitle={"Industry recognition"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;