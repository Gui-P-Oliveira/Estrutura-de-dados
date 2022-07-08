function findLongestConseqSubseq(array, n) {
  contador = 1;
  list = [];
  n = array.length;

  array.sort((a, b) => a - b);
  if (array.length == 0) {
    throw new Error("Array sem elementos");
  }
  array.forEach((element) => {
    if (element < 0 || isNaN(element)) {
      throw new Error(
        "Array com elementos inválidos: números negativos e ou não números"
      );
    }
  });

  for (let i = 1; i <= array.length; i++) {
    if (array[i] == array[i - 1] + 1) {
      contador += 1;
    } else {
      list = [contador, ...list];
      contador = 1;
    }
  }
  list.sort((a, b) => a - b);
  return list.pop();
}

const array = [];
const longestSubsequence = findLongestConseqSubseq(array)

console.log(`A maior subsequência com números consecutivos contém ${longestSubsequence} elementos`);
