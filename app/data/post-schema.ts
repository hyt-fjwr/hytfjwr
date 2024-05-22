import { getFileNamesWithoutExtension } from "../util/fileName";

export const PostSchema = (dir: string): string[] => {
  return getFileNamesWithoutExtension(dir);
};
