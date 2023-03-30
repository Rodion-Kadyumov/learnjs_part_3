const code2 = document.getElementById('code2');
code2.onclick = Code2;
function Code2() {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));
}