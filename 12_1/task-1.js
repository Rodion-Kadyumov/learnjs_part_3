const code5 = document.getElementById('code5');
code5.onclick = Code5;
function Code5() {
  function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647
      yield value;
    }
  
  };
  
  let generator = pseudoRandom(1);
  
  alert(generator.next().value);
  alert(generator.next().value);
  alert(generator.next().value);
}
