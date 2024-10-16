// like array
// no duplicate items
// no order

// es6 has a built in Set method, so `mySet` implements additional set methods
// - add
// - delete
// - has
// - values
// - size (not a function, so mySet.size without parentheses)
function mySet() {

  let collection = [];

  // Checks for presence of an element already in the set; returns true if item is not in the collection
  // If not in collection, would return -1
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  }

  // show all values
  this.values = function() {
    return collection;
  }

  // add item
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  // remove item
  this.remove = function(element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  }

  // Returns the union of two sets
  this.union = function(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function(el){
      unionSet.add(el);
    });
    secondSet.forEach(function(el){
      unionSet.add(el);
    });

    console.log('secondSEt', secondSet)
    return unionSet.values();
  }

  // Returns common items between two sets
  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function(el) {
      if (otherSet.has(el)) {
        intersectionSet.add(el);
      }
    });
    return intersectionSet.values();
  }

  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(function(el) {
      console.log('el', el)
      if(!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });
    return differenceSet.values();
  }

  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  }
}

let mahSet = new mySet();

mahSet.add(1)
mahSet.add(2)
mahSet.add(3)
console.log('values', mahSet.values())
mahSet.remove(2)
console.log('values', mahSet.values())
let otherSet = new mySet();
otherSet.add(4)
otherSet.add(5)
otherSet.add(6)

console.log('union', mahSet.union(otherSet))

otherSet.add(1)
console.log('intersection', mahSet.intersection(otherSet));

console.log('difference', mahSet.difference(otherSet))

console.log('subset', mahSet.subset(otherSet))
otherSet.add(1)
otherSet.add(3)
console.log('subset', mahSet.subset(otherSet))
console.log('mah', mahSet.values())
console.log('other', otherSet.values())

let setA = new mySet();
let setB = new mySet();

setA.add(1);
setA.add(2);
setB.add(1);
setB.add(2);
setB.add(3);

console.log(setA.subset(setB))



