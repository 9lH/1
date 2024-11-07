export default function getWords(str) {
  return str.split(/ +/).filter((word) => !!word)
}
