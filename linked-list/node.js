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


//create addToTail method to add nodes from tail of node
LinkedList.prototype.addToTail = function(value){
    //create node
    const newNode = new Node(value, null, this.tail);

    //if tail exist
    if(this.tail) this.tail.next = newNode;
    
    //if tail doest exist
    else this.head = newNode;

    //add newNode to tail 
    this.tail = newNode;
}


//create method to remove head
LinkedList.prototype.removeHead = function(){

    //if linked list is empty
    if(!this.head) return null;

    //list is not empty than save the value of head node to a variable
    const oldHead = this.head.value;

    //now head will reference to next to head node 
    this.head = this.head.next;

    //if head exist
    if(this.head) return this.head.prev = null;

    //if no head exist 
    else this.tail = null;

    return oldHead;
}

//create method to remove tail
LinkedList.prototype.removeTail = function(){
  
    //if linkedlist is empty
    if(!this.tail) return null;

    //if list is not empty
    const beforDeletingValue = this.tail.value;

    //tail will reference to previous of node
    this.tail = this.tail.prev;

    //if tail exist
    if(this.tail) return this.tail.next = null;

    //if tail not exist
    else this.head = null;

    return beforDeletingValue;
}


//create search method 
LinkedList.prototype.search = function(searchValue){
    //the value of currentNode will change while traversing the list
    let currentNode = this.head;

    //now traverse the currentNode from head to head.next and so on
    //if get the tail than return null
    while(currentNode){
      if(currentNode.value === searchValue){
        return currentNode.value;
      }
      currentNode= currentNode.next;
    } return null;

}



const ll = new LinkedList();

//adding node to the head of node
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
// ll.addToTail(300);

//adding node to the tail of node
ll.addToTail(1000);
ll.addToTail(2000);
ll.addToTail(3000);
// ll.addToHead(300);

//removing node from head of linkedList
// console.log(ll.removeHead());

//removing node from tail of list
// console.log(ll.removeTail());

//search value from list
console.log('searched value is: ',ll.search(300));
console.log('searched value is: ',ll.search(100));




console.log(ll);