import Navigation from "./Navigation";
import Footer from "./Footer";
import QuickEscape from "./QuickEscape";
import ChariotDonation from "./ChariotDonation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log("Layout component rendering");
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-muted py-2 px-4 flex justify-end">
        <ChariotDonation position={"top" as const} />
      </div>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <QuickEscape />
      <ChariotDonation />
    </div>
  );
};

export default Layout;