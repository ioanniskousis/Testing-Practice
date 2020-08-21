import { SHIFT, ALPHABET, characterIndices } from './cipher';

function uncaesar(argument) {
  const string = argument.toLowerCase();
  let decryption = '';
  for (let index = 0; index < string.length; index += 1) {
    const char = string[index];
    const charIndex = characterIndices()[char];
    if (typeof charIndex !== 'undefined') {
      const encryptionIndex = (charIndex + SHIFT) % 26;
      decryption += ALPHABET[encryptionIndex];
    } else {
      decryption += char;
    }
  }
  return decryption;
}

export default uncaesar;
