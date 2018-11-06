'use strict';

function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += i;
  }
  return tot;
}

console.log(triangle(6));
