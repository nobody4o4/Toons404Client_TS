import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-primaryFont2">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
export default HomeLayout;
