import getProfilePic from "@/app/util/getProfilePic";
import Image from "next/image";

export default async function ProfilePic({ a }: { a: string }) {
  const URL = await getProfilePic({
    userId: "user_2gxhYQAzKr1KLKv0bftmq6vYPvd",
  });

  return (
    <>
      <Image
        src={URL}
        width={40}
        height={40}
        quality={70}
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        className="w-[40px] h-[40px]"
        loading="lazy"
        alt="profile pic"
      />
    </>
  );
}
