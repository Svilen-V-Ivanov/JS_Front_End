function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const moreText = document.getElementById('extra');

    if (button.textContent === 'More') {
        moreText.style.display = 'block';
        button.textContent = 'Less';
    } else {
        moreText.style.display = 'none';
        button.textContent = 'More';
    }
}