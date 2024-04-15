import { UserDetailsTable } from "@/components/Admin/tables/AllUserTable";

function UserAdmin() {
  return (
    <div className="flex flex-col gap-y-5 bg-background">
      <h1 className="text-4xl underline underline-offset-8">Users</h1>
      <div className="flex"></div>
      <div className="w-full">
        <UserDetailsTable />
      </div>
    </div>
  );
}
export default UserAdmin;
