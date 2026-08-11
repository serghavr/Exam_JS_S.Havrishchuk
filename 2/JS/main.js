import axios from "https://esm.sh/axios";
import urls from "./urls.js";

const axiosObject = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', headers: {'Content-Type': 'application/json'},
});

export async function getUsers() {
    return await axiosObject.get(urls.users)
}

export async function getUser(userId) {
    return await axiosObject.get(urls.users + '/' + userId);
}

export async function getPosts() {
    return await axiosObject.get(urls.posts)
}

export async function getPost(postId) {
    return await axiosObject.get(urls.posts + '/' + postId);
}
export async function getComments() {
    return await axiosObject.get(urls.comments)
}

export async function getComment(commentId) {
    return await axiosObject.get(urls.comments + '/' + commentId);
}

export async function getUserPosts(userId) {
    return await axiosObject.get(urls.users + '/' + userId + '/posts');
}

export async function getPostComments(postId) {
    return await axiosObject.get(urls.posts + '/' + postId + '/comments');
}

