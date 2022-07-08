function sortAnagrams(array) {
  anagram = new Map();
  result = [];
  listaOrdenada = [];

  for (let i = 0; i < array.length; i++) {
    palavra = array[i];
    ordenada = palavra.split("").sort().join(" ");
    listaOrdenada = [...listaOrdenada, ordenada];
  }

  for (i = 0; i < listaOrdenada.length; i++) {
    key = listaOrdenada[i];
    contador = 0;
    for (let j = i; j < listaOrdenada.length; j++) {
      if (key == listaOrdenada[j + 1] && contador == 0) {
        anagram.set(array[i], array[j + 1]);
        array[j + 1] = null;
        listaOrdenada[j + 1] = i;
        contador += 1;
      } else if (key == listaOrdenada[j + 1] && contador > 0) {
        anagram.set(array[j + 1], null);
        listaOrdenada[j + 1] = i + 1;
        array[j + 1] = null;
      }
    }
    if (contador == 0 && isNaN(key)) {
      anagram.set(array[i], null);
    }
  }

  for (const [key, value] of anagram) {
    if (key != null && value == null) {
      result = [...result, key];
    } else if (key == null && value == null) {
      result = [...result];
    } else {
      result = [...result, key, value];
    }
  }

  return result;
}

anagram = ["alegria", "carro", "alergia", "corar", "muro", "galeria", "rumo"];

console.log(sortAnagrams(anagram));
