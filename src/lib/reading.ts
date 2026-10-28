// Children read slower than adults; ~180 words per minute keeps estimates honest.
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}
