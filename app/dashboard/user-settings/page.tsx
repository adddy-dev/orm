import { UserProfile } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Settings</h1>
      <UserProfile
        path="/dashboard/user-settings"
        appearance={{
          elements: {},
        }}
      />
    </div>
  );
};

export default page;
