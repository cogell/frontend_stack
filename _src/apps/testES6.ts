function f() {
  let total = 0;
  let x = 5;

  for (let x = 1; x < 10; x++) {
    total += x;
  }

  console.log(x);
}


function* idMaker(){
  var index = 0;
  while(true)
      yield index++;
}
