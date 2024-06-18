import * as fs from "fs";
import * as path from "path";

// 指定されたディレクトリのパスを設定します
const directoryPath: string = path.join(__dirname, "../../content/blog");

// ディレクトリ内のファイル名を取得し、配列に格納します
const getFiles = (dirPath: string): string[] => {
  try {
    return fs
      .readdirSync(dirPath)
      .filter((file) => fs.statSync(path.join(dirPath, file)).isFile());
  } catch (err) {
    console.error("Error reading directory:", err);
    return [];
  }
};

export const PostSchema: string[] = getFiles(directoryPath);

// テストのために配列をコンソールに出力します
console.log(PostSchema);
