class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let atual;

    if (this.head == null) {
      this.head = node;
    } else {
      atual = this.head;

      while (atual.next) {
        atual = atual.next;
      }

      atual.next = node;
    }
    this.size++;
  }

  remove(value) {
    let current = this.head;
    let anterior = this.head;

    while (current.element != value && current.next != null) {
      anterior = current;
      current = current.next;
    }

    if (current.element == value) {
      const proximo = current.next;
      anterior.next = proximo;
    }
    this.size--;
  }

  findMiddle() {
    let current = this.head;
    let midle = this.size / 2;
    let contador = 1;

    if (this.size === 0) {
      throw new Error("Não há elementos");
    }

    while (current.next != null && contador != Math.round(midle)) {
      current = current.next;
      contador++;
    }

    if (contador === Math.round(midle) && this.size % 2 != 0) {
      return current;
    } else if (contador === Math.round(midle) && this.size % 2 == 0) {
      return current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
// list.remove(6)

const midle = list.findMiddle();

console.log(midle);
