import { CategoryColor } from "../data/categoryColor";

export function getCategoryColor(categoryName: string): string | undefined {
  const category = CategoryColor.find(
    (category) => category.Name === categoryName
  );
  return category ? category.Color : undefined;
}
