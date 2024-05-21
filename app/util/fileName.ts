import fs from "fs";
import path from "path";

export function getFileNamesWithoutExtension(dirPath: string): string[] {
  const files = fs.readdirSync(dirPath);

  const fileNamewWithoutExtension = files.map((file) => {
    return path.parse(file).name;
  });

  return fileNamewWithoutExtension;
}
