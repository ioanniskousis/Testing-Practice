function capitalize(string) {
  let cap = '';
  for (let index = 0; index < string.length; index += 1) {
    const fChar = index === 0 ? string[index].toUpperCase() : string[index].toLowerCase();
    cap += fChar;
  }
  return cap;
}

export default capitalize;
