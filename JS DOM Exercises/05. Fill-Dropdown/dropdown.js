function addItem() {
    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue')
    const select = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = newText.value;
    option.value = newValue.value;
    select.appendChild(option);

    newValue.value = '';
    newText.value = '';
}