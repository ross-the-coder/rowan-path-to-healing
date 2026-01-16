const AlertRibbon = () => {
  return (
    <section className="bg-white border-y border-emergency/30">
      <div className="overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-scroll">
          <div className="flex items-center gap-6 px-4 py-3 pr-12 shrink-0">
            <span className="font-roboto font-bold text-emergency">ALERT:</span>
            <span className="font-roboto text-sm sm:text-base text-foreground">
              Deepfake photo and videos — if someone is threatening or blackmailing you, or you become aware they have an
              AI-generated photo of you without consent. If you’re in the U.S., report to NCMEC CyberTipline (especially
              if a minor is involved). If adult, report to the platform + local police if threats continue.
            </span>
            <a href="/resources" className="font-roboto font-semibold text-emergency underline underline-offset-2">
              Learn more.
            </a>
          </div>
          <div className="flex items-center gap-6 px-4 py-3 pr-12 shrink-0">
            <span className="font-roboto font-bold text-emergency">ALERT:</span>
            <span className="font-roboto text-sm sm:text-base text-foreground">
              Deepfake photo and videos — if someone is threatening or blackmailing you, or you become aware they have an
              AI-generated photo of you without consent. If you’re in the U.S., report to NCMEC CyberTipline (especially
              if a minor is involved). If adult, report to the platform + local police if threats continue.
            </span>
            <a href="/resources" className="font-roboto font-semibold text-emergency underline underline-offset-2">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertRibbon;
