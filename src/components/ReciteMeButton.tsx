import reciteMeButtonImage from "@/assets/reciteme-button.png";

const ReciteMeButton = () => {
  const handleClick = () => {
    const existingLoader = (window as unknown as { loadReciteService?: () => void })
      .loadReciteService;
    if (typeof existingLoader === "function") {
      existingLoader();
      return;
    }

    const serviceUrl = "https://api.reciteme.com/asset/js?key=";
    const serviceKey = "962e0b59b944e388d7d38c22413636845a6f8fd8";
    const options = {};

    const win = window as unknown as {
      Recite?: {
        load: (opts: Record<string, unknown>) => void;
        enable?: () => void;
        Event?: { subscribe?: (event: string, cb: () => void) => void };
      };
      __reciteLoading?: boolean;
    };

    if (win.Recite) {
      win.Recite.load(options);
      if (typeof win.Recite.enable === "function") {
        win.Recite.enable();
      }
      return;
    }

    if (win.__reciteLoading) {
      return;
    }
    win.__reciteLoading = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `${serviceUrl}${serviceKey}`;
    script.onload = () => {
      if (!win.Recite) {
        return;
      }
      if (win.Recite.Event?.subscribe) {
        win.Recite.Event.subscribe("Recite:load", () => {
          win.Recite?.enable?.();
        });
      }
      win.Recite.load(options);
    };
    document.head.appendChild(script);
  };

  return (
    <button
      type="button"
      id="enableRecite"
      onClick={handleClick}
      aria-label="Recite Me accessibility and language support"
      title="Launch Recite Me"
      className="fixed bottom-24 right-6 z-[2147483647] h-[100px] w-[100px] rounded-full border-2 border-white bg-[#00344c] shadow-lg transition-colors hover:bg-[#e9322e]"
    >
      <img
        src={reciteMeButtonImage}
        alt=""
        className="mx-auto h-[70px] w-[70px]"
      />
    </button>
  );
};

export default ReciteMeButton;
