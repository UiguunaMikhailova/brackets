module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false
  const stack = []

  for (let brackets of bracketsConfig) {
    for (const symbol of str) {
    if (symbol === brackets[0]) {
      stack.push(symbol);
    } else if (symbol === brackets[1]) {
      if (!stack.pop()) {
        return false;
      }
    }
  }
  }
  return stack.length === 0;
}
