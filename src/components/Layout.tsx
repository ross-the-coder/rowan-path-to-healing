import Navigation from "./Navigation";
import Footer from "./Footer";
import QuickEscape from "./QuickEscape";
import ChariotDonation from "./ChariotDonation";
import SkipNav from "./SkipNav";
import ReciteMeButton from "./ReciteMeButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log("Layout component rendering");
  
  return (
    <div className="min-h-screen flex flex-col">
      <SkipNav />
      <Navigation />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <ReciteMeButton />
      <QuickEscape />
      <ChariotDonation />
    </div>
  );
};

export default Layout;