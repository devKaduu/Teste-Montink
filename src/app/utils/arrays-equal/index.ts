export function arraysAreEqual(firstArray: string[], secondArray: string[]): boolean {
  return firstArray.length === secondArray.length && firstArray.every((value, index) => value === secondArray[index]);
}
