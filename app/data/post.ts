import { metadata } from "./../layout";
import "server-only";
import { PostSchema } from "./post-schema";
import { Post } from "../types/Post";

export const getPost = async (id: string) => {
  const post = await import(`/content/blog/${id}.mdx`);
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
