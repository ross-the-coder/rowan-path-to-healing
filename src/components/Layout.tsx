import Navigation from "./Navigation";
import Footer from "./Footer";
import QuickEscape from "./QuickEscape";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chariot-tile': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { cid: string }, HTMLElement>;
    }
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log("Layout component rendering");
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full flex justify-center py-2 bg-muted">
        <chariot-tile cid="live_94b0c45a4d4331c03a8a7aba670bd6bfe484c5ceec4f468525a7a77addc78c88"></chariot-tile>
      </div>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <QuickEscape />
    </div>
  );
};

export default Layout;