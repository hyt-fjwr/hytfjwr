import { clerkClient } from "@clerk/nextjs/server";

export default async function getProfilePic({ userId }: { userId: string }) {
  const profilePic = await clerkClient.users.getUser(userId);
  return profilePic.imageUrl;
}
