export class Zipper {
  constructor(subtree, parent) {
    this.subtree = subtree;
    this.parent = parent || undefined;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.parent ? this.toTree(this.parent) : this.subtree;
  }
}
