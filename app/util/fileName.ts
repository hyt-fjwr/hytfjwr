import * as fs from "fs";
import * as path from "path";

export function getFileNamesWithoutExtension(directoryPath: string): string[] {
  try {
    const files = fs.readdirSync(directoryPath);
    return files.map((file) => path.parse(file).name);
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}
