function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  let sentences = input.value.split('.');
  sentences.pop();

  while (sentences.length > 0) {
    let paragraph = sentences.splice(0, 3)
      .map((p) => p.trimStart());

    const newPar = document.createElement('p');
    newPar.textContent = paragraph.join('.') + '.';
    output.appendChild(newPar);
  }
}