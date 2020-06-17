// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
if (a instanceof Array) {
    console.log("a is array");
}
if (b instanceof Array) {
    console.log("b is array");
}

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
    a[i] = 2 * a[i];
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => {
    return b - a
}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let counts = new Map();
for (let i in a) {
    if (counts.has(a[i])) {
        counts.set(a[i], counts.get(a[i]) + 1);
    } else {
        counts.set(a[i], 1);
    }
}
let count = 0;
let maxC;
for (let [key, value] of counts) {
    if (value > count) {
        count = value;
        maxC = key;
    }
}
if (typeof maxC === 'string') {
    console.log("'" + maxC + "'");
} else {
    console.log(maxC);
}