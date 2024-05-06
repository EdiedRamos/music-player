export function getNextIndex(currentIndex: number, limitIndex: number): number {
  return (currentIndex + 1) % limitIndex;
}

export function getPreviousIndex(
  currentIndex: number,
  limitIndex: number
): number {
  return (currentIndex + limitIndex + 1) % limitIndex;
}
