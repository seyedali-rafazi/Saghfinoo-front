interface TruncateTextType {
  str: string;
  length: number;
}

export function truncateText({ str, length }: TruncateTextType): string {
  if (str.length < length) {
    return str;
  }
  return str.slice(0, length) + "...";
}
