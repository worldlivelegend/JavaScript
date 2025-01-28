export function generateKey(keyLength, symbols) {
  let result = '';
  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    result += symbols[randomIndex];
  }
  return result
}