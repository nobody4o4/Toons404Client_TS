import SideBar from "@/components/Admin/SideBar";

function AuthorDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
}
export default AuthorDashboardLayout;
