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
      <h1></h1>
      <div className="prose dark:prose-invert">
        <post.content />
      </div>
    </div>
  );
}
