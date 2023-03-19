function solve() {
   const input = document.getElementById('searchField');
   const button = document.getElementById('searchBtn');
   button.addEventListener('click', findText);

   function findText() {
      const filter = input.value;
      const allRows = Array.from(document.querySelectorAll('tbody tr'));

      for (const row of allRows) {
         let text = row.textContent.trim();

         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }

         if (text.includes(filter)) {
            row.classList.add('select');
         }
      }

      input.value = '';
   }
}