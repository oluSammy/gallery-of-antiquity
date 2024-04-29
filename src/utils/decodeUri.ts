export function decodeURIString(uriString: string) {
  return decodeURIComponent(uriString.replace(/\+/g, " "));
}
