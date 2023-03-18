function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));

    for (const profile of profiles) {
        const children = profile.children;
        const button = children[10];

        button.addEventListener('click', details);
    }

    function details(e) {
        const target = e.currentTarget;
        const additionalInfo = target.parentElement.children[9];
        const radioInput = target.parentElement.children[4];
        if (radioInput.checked) {
            if (target.textContent === 'Show more') {
                additionalInfo.style.display = 'block';
                target.textContent = 'Hide it';
            } else {
                additionalInfo.style.display = 'none';
                target.textContent = 'Show more';
            }
        }

    }
}