export function formatDate(dateString: string): string {
  // 正規表現を使って年、月、日を取得
  const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) {
    const [_, year, month, day] = match;
    // 日本語形式の文字列にフォーマット
    return `${year}年${parseInt(month, 10)}月${parseInt(day, 10)}日`;
  } else {
    throw new Error("日付形式が不正です");
  }
}
