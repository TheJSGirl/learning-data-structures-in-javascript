function linkedList() {
  this.head = null; 
  this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next  = next;
  this.prev  = prev;
}

var node1 = new Node(100, 'node2', null);
var node3 = new Node(200, 'node3', node1.next);

console.log(node1);
console.log(node3);