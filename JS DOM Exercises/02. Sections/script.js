function create(words) {
   const content = document.getElementById('content');

   for (const iterator of words) {
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');

      newP.textContent = iterator;
      newP.style.display = 'none';

      newDiv.addEventListener('click', (() => {
         newP.style.display = 'block'
      }));

      newDiv.appendChild(newP);
      content.appendChild(newDiv);
   }
}