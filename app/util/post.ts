import "server-only";
import { Post } from "../types/Post";
import { blogPostSchema, projectPostSchema } from "../data/post-schema";

//Blogs
export const getBlogPost = async (id: string) => {
  const post = await import(`@/content/blog/${id}.mdx`);
  const { title, publishedAt, tags } = post.metadata;
  return {
    id,
    title,
    publishedAt,
    tags,
    content: post.default,
  };
};

export const getAllBlogPosts = async (): Promise<Post[]> => {
  return await Promise.all(blogPostSchema.map(async (id) => getBlogPost(id)));
};

export const getAllBlogPostsByTags = async (tag: string): Promise<Post[]> => {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
};

//Projects
export const getProjectPost = async (id: string) => {
  const post = await import(`@/content/project/${id}.mdx`);
  const { title, publishedAt, tags } = post.metadata;
  return {
    id,
    title,
    publishedAt,
    tags,
    content: post.default,
  };
};

export const getAllProjectPosts = async (): Promise<Post[]> => {
  return await Promise.all(
    projectPostSchema.map(async (id) => getProjectPost(id))
  );
};

export const getAllProjectPostsByTags = async (
  tag: string
): Promise<Post[]> => {
  const allPosts = await getAllProjectPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
};
