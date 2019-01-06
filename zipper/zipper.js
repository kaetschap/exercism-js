export class Zipper {
  constructor(subtree, parent) {
    this.subtree = subtree;
    this.parent = parent || undefined;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.parent ? this.parent.toTree() : this.subtree;
  }

  value() {
    return this.subtree.value;
  }

  left() {
    return this.subtree.left ? new Zipper(this.subtree.left, this) : null;
  }

  right() {
    return this.subtree.right ? new Zipper(this.subtree.right, this) : null;
  }

  up() {
    return this.parent ? this.parent : null;
  }

  setValue(newValue) {
    this.subtree.value = newValue;
    return this;
  }

  setLeft(leaf) {
    this.subtree.left = leaf;
    return this;
  }

  setRight(leaf) {
    this.subtree.right = leaf;
    return this;
  }
}
