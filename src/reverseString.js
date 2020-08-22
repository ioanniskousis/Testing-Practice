function reverseString(string) {
  let reverse = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    reverse += string[index];
  }
  return reverse;
}

export default reverseString;
