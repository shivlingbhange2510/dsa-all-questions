class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function createNode(val) {
  return new Node(val);
}
const node = new Node(1);
node.left = new Node(2);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.left.right.left = new Node(6);

node.right = createNode(3);
node.right.left = createNode(7);
node.right.right = createNode(8);
node.right.right.left = createNode(9);
node.right.right.right = createNode(10);

console.log(node.right.right.right);
let ar=[];
ar.push(node)
console.log("arr", ar)
console.log("arr length ", ar.length)


const preOrder = (node) => {
  if (!node) return;
  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
};

// preOrder(node);
