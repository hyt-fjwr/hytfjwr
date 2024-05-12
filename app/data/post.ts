import "server-only";

export const getPost = async (id: string) => {
  const post = await import(`/content/blog/${id}.mdx`);
  return {
    meta: post.metadata,
    content: post.default,
  };
};
