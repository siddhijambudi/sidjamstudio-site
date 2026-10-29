// Children read slower than adults; ~180 words per minute keeps estimates honest.
// HTML (e.g. illustration <figure> markup) is stripped so it doesn't count as words.
export function readingMinutes(body: string | undefined): number {
  const text = (body ?? '').replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}
