export function cut(name: string, maxLength = 25) {
  return name.length < maxLength ? name : `${name.slice(0, maxLength)}...`;
}
