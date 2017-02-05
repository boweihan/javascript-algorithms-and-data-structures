var Stack = require('./stack');

function mulBase(num, base) {
    var s = new Stack();
    do {
      s.push(num % base);
      num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
      converted += s.pop();
    }
    return converted;
}

console.log(mulBase(32, 2));
console.log(mulBase(6, 2));
console.log(mulBase(3253, 2));
console.log(mulBase(233, 7));