import { SHIFT, ALPHABET, characterIndices } from './cipher';

function caesar(argument) {
  const string = argument.toLowerCase();
  let encryption = '';
  for (let index = 0; index < string.length; index += 1) {
    const char = string[index];
    const charIndex = characterIndices()[char];
    if (typeof charIndex !== 'undefined') {
      const encryptionIndex = ((charIndex - SHIFT) + 26) % 26;
      encryption += ALPHABET[encryptionIndex];
    } else {
      encryption += char;
    }
  }
  return encryption;
}

export default caesar;
