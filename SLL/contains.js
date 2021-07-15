class Node{
    constructor(value){
        this.val =value;
        this.next= null;
    }
}

class SLL{
    constructor(){
        this.head=null;
    }
    contains(value){
        var runner = this.head;
        while(runner != null){
            if(runner.val==value){
                return true;
            }
            runner= runner.next;
        }
        return false;
    }
}

sll1 = new SLL();
node1 = new Node(5);
node2 = new Node(11);

sll1.head= node1;
node1.next =node2;
console.log(sll1.contains(1));
console.log(sll1.contains(11));