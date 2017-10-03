function LinkedList() {
  this.head = null; 
  this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next  = next;
  this.prev  = prev;
}

//instace of Node function
// var node1 = new Node(100, 'node2', null);
// var node3 = new Node(200, 'node3', node1.next);

// console.log(node1);
// console.log(node3);

//now we create LinkedList prototpe function which is by default will be add to linkedList method 

LinkedList.prototype.addToHead = function (value){
  
  //here we create newNode and assign newNode head to next of node and set previous of node null 
  const newNode = new Node(value, this.head, null);

  //if head node is exists than its previous pointer now point to newNode
  if(this.head) this.head.prev = newNode;

  //if head doesn't exist 
  else this.tail = newNode;

  //add newNode to the head, if our linkedlist empty or not it will assign in both cases
  this.head = newNode;
};

const ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
console.log(ll);