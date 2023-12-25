export function camelCaseToSpaces(input: string): string {
  return input
    .replace(/([A-Z])/g, " $1") // insert a space before all found uppercase letters
    .replace(/^./, function (str) {
      return str.toUpperCase();
    }); // uppercase the first character
}
