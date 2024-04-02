import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Fragment } from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-primaryFont2  min-h-screen bg-background text-text">
      <div className="min-h-screen">
        <NavBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default HomeLayout;
