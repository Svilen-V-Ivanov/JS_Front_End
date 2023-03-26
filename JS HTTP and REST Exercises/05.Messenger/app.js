function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textArea = document.getElementById('messages');
    const authorInput = Array.from(document.getElementsByName('author'))[0];
    const contentInput = Array.from(document.getElementsByName('content'))[0];

    submitBtn.addEventListener('click', submit);
    refreshBtn.addEventListener('click', refresh);

    async function submit() {
        const author = authorInput.value;
        const content = contentInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ author, content })
        };
        try {
            const messageInfo = await fetch(BASE_URL, httpHeaders);
            let messageData = await messageInfo.json();
            messageData = Object.values(messageData);
            // Check if need to clean field after submit
            authorInput.value = '';
            contentInput.value = '';
        } catch (err) {
            console.error(err);
        }

    }

    async function refresh() {
        textArea.textContent = '';
        try {
            const messageInfo = await fetch(BASE_URL);
            let messageData = await messageInfo.json();
            messageData = Object.values(messageData);
            let count = 0;

            for (const iterator of messageData) {
                let newText = `${iterator['author']}: ${iterator['content']}`;
                count += 1;
                if (count < messageData.length) {
                    textArea.textContent += newText + '\n';
                } else {
                    textArea.textContent += newText;
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
}

attachEvents();