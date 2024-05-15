import React from "react";
import { getPost } from "../../data/post";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);

  return (
    <div>
      <div className="prose dark:prose-invert w-[45rem] flex flex-col">
        <div className="mt-8">
          <post.content />
        </div>
      </div>
    </div>
  );
}
