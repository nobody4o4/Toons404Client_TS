import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
export default HomeLayout;
