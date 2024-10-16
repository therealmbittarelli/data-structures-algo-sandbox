// stacks
// last in, first out
// push last book to top of stack
// pop last book off the stack
// peek displays top book
// length

let letters = [];

let word = "racecar";

let reverseWord = "";

// push letters into the stack
for (let i=0; i < word.length; i++) {
    letters.push(word[i]);
    console.log('letters stack');
}

// pop
for (let i=0; i < word.length; i++) {
    reverseWord += letters.pop();
    console.log("reverse word", reverseWord);
}

// is palindrome?
if (reverseWord === word) {
    console.log(word + " is a palindrome");
}
else {
    console.log(word + " is not a palindrome");
}

// length
function length(word) {
    return word.length - 1;
}
// peek
console.log('the top of the stack: ', word[length(word)])


////////////////////////////////

// stack - manually

let Stack = function() {
    this.count = 0;
    this.storage = {};

    // push
    // added to the end (right hand side)
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
        console.log('push', this.storage)
    }

    // pop
    // removed from the end (right hand side)
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        console.log('pop', result)
        return result;
    }

    // length
    this.size = function() {
        console.log('length', this.count)
        return this.count;
    }

    // peek
    this.peek = function() {
        console.log('peek', this.storage[this.count - 1])
        return this.storage[this.count - 1];
    }


}

let myStack = new Stack();

myStack.push('a')
myStack.push('b')
myStack.push('c')
myStack.push('z')
myStack.size()
myStack.pop()

myStack.size()
myStack.peek()