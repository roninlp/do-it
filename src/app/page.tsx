import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      {user && <p>{user.username}</p>}
      <UserButton afterSignOutUrl="/" showName />
    </div>
  );
}
