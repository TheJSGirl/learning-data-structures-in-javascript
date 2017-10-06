function BST(value){
    //properties
    this.value = value;
    this.left = null; 
    this.right = null;
}

//insertion in binary tree
BST.prototype.insert = function(value){
    if(value <= this.value){
        if(!this.left){
            this.left = new BST(value);
        }
        else{
            this.left.insert(value);
        }
    }
    else if(value > this.value){
        if(!this.right){
            this.right = new BST(value);            
        }
        else this.right.insert(value);

    }
};

//serching an element in a tree
BST.prototype.search = function(value){
    if(this.value === value) return true;
    else if(this.value <= value){
        if(!this.right) return false;
        else{
            return this.right.search(value);
        }
    }
    else if(this.value > value){
        if(!this.right) return false;
        else{
            return this.left.search(value);
        }
    }
}


let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);



// console.log(bst.right.left.left);

//search element in a tree
console.log(bst.search(85)); //true
console.log(bst.search(15)); //false


