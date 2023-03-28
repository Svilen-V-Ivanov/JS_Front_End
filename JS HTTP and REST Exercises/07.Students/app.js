function attachEvents() {
  window.addEventListener('load', createAndList);
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const inputs = Array.from(document.querySelectorAll('input'));
  const submitBtn = document.getElementById('submit');
  const tableBody = document.querySelector('#results > tbody');

  submitBtn.addEventListener('click', createAndList);
  

  async function createAndList() {
    try {
      let [first, last, faculty, score] = inputs;
      let firstName = first.value;
      let lastName = last.value;
      let facultyNumber = faculty.value;
      let grade = score.value;
      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
      };
      const submitData = await fetch(BASE_URL, httpHeaders);
      let submitInfo = await submitData.json();

      inputs.forEach((a) => {
        a.value = ''
      });
    } catch (err) {
      console.error(err);
    }

    try {
      tableBody.innerHTML = '';
      const studentData = await fetch(BASE_URL);
      let studentInfo = await studentData.json();
      studentInfo = Object.values(studentInfo);

      for (const iterator of studentInfo) {
        tableBody.appendChild(await createTableRow(iterator));
      }
    } catch (err) {
      console.error(err);
    }

    async function createTableRow(student) {
      let trow = document.createElement('tr');
      let studentDict = {
        'firstName': '',
        'lastName': '',
        'facultyNumber': '',
        'grade': 0
      };

      for (const key in student) {
        studentDict[key] = student[key];
      }

      for (const key in studentDict) {
        let td = document.createElement('td');
        if (key !== '_id') {
          td.textContent = studentDict[key];
          trow.appendChild(td);
        }
      }

      return trow;
    }
  }
}

attachEvents();