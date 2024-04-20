import EditUserForm from "@/components/EditUserForm";
import ProfileSidebar from "@/components/ProfileSidebar";
import { Card } from "@/components/ui/card";

export default function EditUserProfile() {
  return (
    <>
      <div key="1" className="min-h-[100vh] bg-background p-8 text-text">
        <div className="grid grid-cols-4 gap-8">
          <ProfileSidebar />
          <Card className="col-span-3 w-full p-10 ">
            <div className="mb-6">
              <h1 className="mb-2 text-2xl font-bold">Edit Your Profile</h1>
            </div>
            <div>
              <EditUserForm />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
