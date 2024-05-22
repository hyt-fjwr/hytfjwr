import "server-only";
import { PostSchema } from "../data/post-schema";
import { Post } from "../types/Post";

export const getPost = async (id: string) => {
  const post = await import(`@/content/blog/${id}.mdx`);
  const { postId, title, publishedAt, tags } = post.metadata;
  return {
    postId,
    title,
    publishedAt,
    tags,
    content: post.default,
  };
};

export const getAllPosts = async (): Promise<Post[]> => {
  return await Promise.all(PostSchema.map(async (id) => getPost(id)));
};

export const getAllPostsByTags = async (tag: string): Promise<Post[]> => {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
};
