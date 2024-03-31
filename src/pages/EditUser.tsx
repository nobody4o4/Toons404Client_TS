import EditUserForm from "@/components/EditUserForm";
import ProfileSidebar from "@/components/ProfileSidebar";

export default function EditUserProfile() {
  return (
    <>
      <div key="1" className="min-h-[100vh] bg-white p-8">
        <div className="grid grid-cols-4 gap-8">
          <ProfileSidebar />
          <div className="col-span-3 w-full px-4 ">
            <div className="mb-6">
              <h1 className="mb-2 text-2xl font-bold">Edit Your Profile</h1>
            </div>
            <div>
              <EditUserForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
