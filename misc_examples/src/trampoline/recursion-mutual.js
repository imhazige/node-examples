function eat_money(input_seq) {
  var input = input_seq.shift();
  if (input == '五块') {
    console.log('收到呢,选个巧克力吧^_^');
    choose(input_seq);
  } else {
    eat_money(input_seq);
  }
}

function choose(input_seq) {
  var input = input_seq.shift();
  if (input == '巧克力') {
    console.log('选了巧克力, 按下找零按钮, 我还欠你两块钱哦');
    changes(input_seq);
  } else {
    choose(input_seq);
  }
}

function changes(input_seq) {
  var input = input_seq.shift();
  if (input == '找零') {
    console.log('欢迎再次光临');
    eat_money(input_seq);
  } else {
    changes(input_seq);
  }
}

//build long input
let input_seq = [
  '巧克力',
  '巧克力',
  '找钱',
  '五块',
  '找钱',
  '五块',
  '巧克力',
  '五块',
  '找钱'
];
for (var n = 15; n > 0; n--) {
  input_seq = input_seq.concat(input_seq);
}
input_seq.length; // => 294912
// Maximum call stack size exceeded
changes(input_seq);
