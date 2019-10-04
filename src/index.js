module.exports = function multiply(first, second) {
let f = first.split('').reverse();
let s = second.split('').reverse();
let stack = [];
for (let i = 0; i < f.length; i++) {
  for (let j = 0; j < s.length; j++) {
    let m = f[i] * s[j];
    stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
  }
}

for (var i = 0; i < stack.length; i++) {
  var num = stack[i] % 10;
  var move = Math.floor(stack[i] / 10);
  stack[i] = num;

  if (stack[i + 1])
    stack[i + 1] += move;
  else if (move != 0)
    stack[i + 1] = move;
}


return stack.reverse().join('');

}
