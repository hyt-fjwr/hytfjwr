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

export const getAllPosts = async (dir: string): Promise<Post[]> => {
  return await Promise.all(PostSchema(dir).map(async (id) => getPost(id)));
};

export const getAllPostsByTags = async (
  dir: string,
  tag: string
): Promise<Post[]> => {
  const allPosts = await getAllPosts(dir);
  return allPosts.filter((post) => post.tags.includes(tag));
};
