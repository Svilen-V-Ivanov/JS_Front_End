function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const loadPosts = document.getElementById('btnLoadPosts');
    const viewPosts = document.getElementById('btnViewPost');
    const postsSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    let postsArray = [];

    loadPosts.addEventListener('click', postsLoad);
    viewPosts.addEventListener('click', comentsLoad);

    async function postsLoad() {
        try {
            const postsInfo = await fetch(POSTS_URL);
            let postsData = await postsInfo.json();
            postsData = Object.values(postsData);
            
            for (const iterator of postsData) {
                postsArray.push(iterator);

                let option = document.createElement('option');
                option.value = iterator['id'];
                option.textContent = iterator['title'];
                postsSelect.appendChild(option);
            }
            
        } catch (err) {
            console.error(err);
        }
    }
    
    async function comentsLoad() {
        postComments.innerHTML = '';
        let currentObj = {};
        let validComments = [];  
        for (const iterator of postsArray) {
            if (iterator['id'] === postsSelect.value) {
                currentObj = iterator;
            }
        }

        postTitle.textContent = currentObj['title'];
        postBody.textContent = currentObj['body'];

        try {
            const commentsInfo = await fetch(COMMENTS_URL);
            let commentsData = await commentsInfo.json();
            commentsData = Object.values(commentsData);
            
            for (const iterator of commentsData) {
                if (iterator['postId'] === currentObj['id']) {
                    validComments.push(iterator);
                }
            }
            for (const comment of validComments) {
                let li = document.createElement('li');
                li.textContent = comment['text'];
                li.setAttribute('id', comment['id']);
                postComments.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }
    }
}

attachEvents();