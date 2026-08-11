import { getPost, getPostComments } from './main.js';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

if (postId) {
    const postContainer = document.getElementById('postContainer');
    const commentsContainer = document.getElementById('commentsContainer');

    getPost(postId).then(res => {
        const post = res.data;

        for (const key in post) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${key}:</strong> ${post[key]}`;
            postContainer.appendChild(p);
        }
    });

    getPostComments(postId).then(res => {
        const comments = res.data;

        comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.classList.add('comment-card');

            const name = document.createElement('h5');
            name.innerText = comment.name;

            const email = document.createElement('p');
            email.innerHTML = `<em>${comment.email}</em>`;

            const body = document.createElement('p');
            body.innerText = comment.body;

            commentCard.appendChild(name);
            commentCard.appendChild(email);
            commentCard.appendChild(body);
            commentsContainer.appendChild(commentCard);
        });
    });
}