const createStack = () => {
  let list = [];
  let listDoubled = [];

  return {
    add: (N, elements) => {
      if (N > elements.length) {
        throw new Error(
          "N maior que o numero de elementos na lista para serem add"
        );
      } else {
        for (let j = 0; j < N; j++) {
          let value = elements[j];
          list = [value, ...list];
          for (let i = 0; i < N; i++) {
            if ((list[i + 1] == value) & (list.length > 1)) {
              let duplicado = list[i + 1];
              console.log(
                `O elemento ${duplicado} já se encontra na lista e não será add novamente`
              );
              listDoubled = [duplicado, ...listDoubled];
              [head, ...tail] = list;
              list = tail;
            }
          }
        }
      }
    },

    remove: (N) => {
      contador = N;
      if (N > list.length) {
        throw new Error(
          "Número de remoções desejada maior que a quantidade de elementos que podem ser removidos na lista"
        );
      } else if (N <= list.length) {
        while (contador > 0) {
          [head, ...tail] = list;
          list = tail;
          contador -= 1;
        }
      }
    },

    list: () => {
      return list;
    },

    doubled: () => {
      return listDoubled;
    },
  };
};

const pilha = createStack();
pilha.add(9, [1, 2, 3, 4, 5, 6, 2, 4, 6]);
console.log(`Tamanho da pilha: ${pilha.list().length}`);
pilha.remove(7);
