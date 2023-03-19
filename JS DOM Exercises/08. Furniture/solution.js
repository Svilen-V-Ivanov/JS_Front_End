function solve() {
  const buttons = Array.from(document.getElementsByTagName('button'));
  const input = document.querySelector('#exercise textarea');
  const output = Array.from(document.getElementsByTagName('textarea'))[1];


  let inputBtn = buttons[0];
  let outputBtn = buttons[1];

  inputBtn.addEventListener('click', processData);


  function processData() {
    const info = JSON.parse(input.value);

    for (const product of info) {
      const parent = document.querySelector('.table tbody');
      const child = generateChild(product);
      parent.appendChild(child);
    }
  }

  outputBtn.addEventListener('click', outputData);

  function generateChild(obj) {
    const newRow = document.createElement('tr');
    const length = Object.keys(obj).length;
    const array = Array.from(Object.entries(obj));

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = false;
    let entryObj = {
      "img": NaN,
      "name": '',
      "price": 0,
      "decFactor": 0.00,
    };

    
    for (const items of array) {
      let key = items[0];
      let value = items[1];
      entryObj[key] = value;
    }

    let list = [];
    let img = document.createElement('img');
    img.src = entryObj["img"];
    list.push(img);

    let name = document.createElement('p');
    name.textContent = entryObj["name"];
    list.push(name);

    let price = document.createElement('p');
    price.textContent = Number(entryObj["price"]);
    list.push(price);

    let dec = document.createElement('p');
    dec.textContent = Number(entryObj["decFactor"]);
    list.push(dec);


    for (const item of list) {
      let newTd = document.createElement('td');
      newTd.appendChild(item);
      newRow.appendChild(newTd);
    }

    let extraTd = document.createElement('td');
    extraTd.appendChild(input);
    newRow.appendChild(extraTd);

    return newRow;
  }

  function outputData() {
    const items = Array.from(document.querySelectorAll('.table tbody tr'));
    let products = [];
    let price = 0;
    let factor = 0.0;
    let count = 0;

    for (const item of items) {
      let filter = item.children[4].children[0];
      if (filter.checked) {
        products.push(item.children[1].children[0].textContent);
        price += Number(item.children[2].children[0].textContent);
        factor += Number(item.children[3].children[0].textContent);
        count += 1;
      }
    }
    if (count <= 1) {
      count = 1;
    }
    factor = (factor / count);
    products = products.join(', ');

    output.textContent = `Bought furniture: ${products}` + '\n' + `Total price: ${price.toFixed(2)}` + '\n' + `Average decoration factor: ${factor}`
  }
}

