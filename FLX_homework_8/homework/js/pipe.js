function addOne(x){
  return x + 1;
}

function pipe() {
  var a = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
   a = arguments[i](a);
  }
  return a;
}
pipe(1,addOne,addOne,addOne)