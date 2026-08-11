import { getUser, getUserPosts } from './main.js';
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

if (userId) {
    getUser(userId).then(res => {
        const user = res.data;
        const detailsContainer = document.getElementById('userContainer');
        function renderObject(obj, parentContainer) {
            const ul = document.createElement('ul');
            for (const key in obj) {
                const li = document.createElement('li');
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    li.innerHTML = `<strong>${key}:</strong>`;
                    renderObject(obj[key], li);
                } else {
                    li.innerHTML = `<strong>${key}:</strong> ${obj[key]}`;
                }
                ul.appendChild(li);
            }
            parentContainer.appendChild(ul);
        }
        renderObject(user, detailsContainer);
        const postsBtn = document.createElement('button');
        postsBtn.innerText = 'post of current user';
        postsBtn.classList.add('posts-btn');
        document.body.appendChild(postsBtn);
        postsBtn.onclick = () => {
            let postsContainer = document.getElementById('postsContainer');
            if (!postsContainer) {
                postsContainer = document.createElement('div');
                postsContainer.id = 'postsContainer';
                document.body.appendChild(postsContainer);
            }
            postsContainer.innerHTML = '';

            getUserPosts(userId).then(res => {
                const posts = res.data;

                posts.forEach(post => {
                    const postCard = document.createElement('div');
                    postCard.classList.add('post-card');

                    const postTitle = document.createElement('h4');
                    postTitle.innerText = post.title;

                    const postBtn = document.createElement('button');
                    postBtn.innerText = 'Post details';
                    postBtn.onclick = () => {
                        window.location.href = `post-details.html?postId=${post.id}`;
                    };

                    postCard.appendChild(postTitle);
                    postCard.appendChild(postBtn);
                    postsContainer.appendChild(postCard);
                });
            });
        };
    });
}