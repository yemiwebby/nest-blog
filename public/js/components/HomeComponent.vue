<template>
    <div>
      <div class="container">
          <h1>Nest Blog Tutorial</h1>
          <p> This is the description of the blog built with Nest.js, Vue.js and MongoDB</p>
      </div>

        <div class="row">
           <div class="col-md-4" v-for="post in posts" :key="post._id">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                   <h2 class="card-img-top">{{ post.title }}</h2>
                  <p class="card-text">{{ post.body }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group" style="margin-bottom: 20px;">
                      <router-link :to="{name: 'Post', params: {id: post._id}}" class="btn btn-sm btn-outline-secondary">View Post </router-link>
                       <router-link :to="{name: 'Edit', params: {id: post._id}}" class="btn btn-sm btn-outline-secondary">Edit Post </router-link>
                       <button class="btn btn-sm btn-outline-secondary" v-on:click="deletePost(post._id)">Delete Post</button>
                    </div>
                  </div>

                  <div class="card-footer">
                    <small class="text-muted">Posted on: {{ post.date_posted}}</small>
                    <small class="text-muted">by: {{ post.author}}</small>
                  </div>
                   
                </div>
              </div>
            </div>
      </div>
    </div>
</template>

<script>
import POSTS from '../../../src/mocks/post.mock.js';
import { server } from '../utils/helper';
import axios from 'axios';
import router from '../router';
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = POSTS;
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
        .get(`${server.baseURL}/blog/posts`)
        .then(data => (this.posts = data.data));
    },
    deletePost(id) {
      axios.delete(`${server.baseURL}/blog/delete?postID=${id}`).then(data => {
        window.location.reload();
      });
    },
  },
};
</script>

