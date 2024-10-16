// left off at: https://youtu.be/t2CEgPsws3U?si=oSLkfiKAiFsc0W5Q&t=1321


// queue
// first in, first out
// waiting in line

// can use array in JS

function Queue () {
  let collection = [];

  this.print = function() {
    console.log('collection:', collection);
  }

  // push
  this.enqueue = function(element) {
    return collection.push(element);
  }

  // shift/remove from queue - removes first item of array and returns
  this.dequeue = function() {
    return collection.shift();
  }

  // Front of queue - first position
  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return (collection.length === 0);
  }

}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2)
myQueue.enqueue(3);
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log('front',myQueue.front());
