const code1 = document.getElementById('code1');
code1.onclick = Code1;
function Code1() {
  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);
}