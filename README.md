# Estrutura-de-dados

Os exercícios foram o trabalho de conclusão do módulo sobre estrutura de dados na instituição Let's Code Academy. As estruturas cobradas foram Arrays, Pilhas, HashMap e Linked List. Além dessas, também conhecemos um pouco sobre árvores, grafos e notação BIG-O.

## Requisitos obrigatórios

### Exercício Array:

- Dado um array com números positivos, encontre o tamanho da maior sub-sequência na qual todos os elementos são consecutivos, e os números consecutivos pode estar em qualquer ordem.
- Para isso, crie a função -> findLongestConseqSubseq, que deve receber como parâmetros:  
  1 - um array  
  2 - o tamanho do array

### Exercício Pilha:

- Crie uma pilha que permita remover e adicionar N elementos de uma só vez.
- A estrutura deve conter 2 funções:  
  add (N, ...elements) para a inserção de N elementros  
  remove(N) para a remoção de N elementos.
- A estrutura não deve permitir receber elementos duplicados. A estrutura deve conter os tratamentos para não realizar operações indevidas(exemplo: remover mais do que o tamanho total).

### Exercício Dicionário/HashMap:

- Crie uma um método chamado sortAnagrams. Esse método deve receber um array de strings, e fazer com que os anagramas sejam impressos próximos.  
  exemplo: ['deli', 'lemon', 'idle', 'leap', 'pale', 'melon']  
  saida: [ 'deli', 'idle', 'lemon', 'melon', 'leap', 'pale' ]  
  
### Exercício Linked List:  

- Crie uma um método chamado findMiddle. Esse método deve retornar o elemento do meio da lista. Caso o tamanho seja par("2 meios") retorne o segundo.  

## Manual do usuário  

- Clone o repositório localmente. Para que os códigos JavaScript sejam executados podem ser utilizadas duas opções:   
  1-execute o arquivo index.hmtl e através da ferramenta devtools/console do seu navegador visualize e manipule os resultados.  
  2-rode os arquivos JS através da extensão Code Runner e visualize os resultados no terminal do VSC.  
  
#### Exercício Array:

  Caso o array utilizado como parametro na função findLongestConseqSubseq esteja vazio, será exibida uma mensagem como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/array-1.PNG" width="800"      height="410">  
  
  Caso o array utilizado como parametro na função findLongestConseqSubseq contenha números negativos e ou não números, será exibida uma mensagem como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/array-2.PNG" width="800" height="410">  
  
  Caso não haja nenhuma irregularidade no array analisado ele irá exibir uma mensagem como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/array-3.PNG" width="800" height="410">  
  
#### Exercício Pilha:  
   
  Caso o número de elementos que se deseja adicionar seja maior que o número de elementos do array na função createStack().add, será exibida uma mensagem como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/pilha-1.PNG" width="800"      height="410">   
  
  Caso existam números repetidos no array que se deseja manipular na função createStack().add, será exibida uma mensagem como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/pilha-2.PNG" width="800"      height="410">  
  
  Caso o número de elementos que se deseja remover seja maior que o número de elementos do array na função createStack().remove, será exibida uma mensagem como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/pilha-3.PNG" width="800"      height="410">  
  
#### Exercício Dicionário/HashMap:  
   
  Caso o array de strings passado como parametro na função sortAnagrams contenha anagramas, ele retornara um array como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/hashmap.PNG" width="800"      height="410">   
  
#### Exercício  Linked List:   
   
  Caso o número de elementos na linked list seja impar, ele retornará o elemento do meio como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/linked-list-impar.PNG" width="800"      height="410">  
  
  Caso o número de elementos na linked list seja par, ele retornará o segundo elemento do meio como no exemplo:
  <img src="https://github.com/Gui-P-Oliveira/Estrutura-de-dados/blob/ee11db49d9f95d1e2db9f503a5cff270735d8f7d/Exercicios/Assets/Prints/linked-list-par.PNG" width="800"      height="410">  
  
  
  


  
  


