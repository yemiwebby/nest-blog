<template>
    <div>
      <div class="container">
          <h1>Nest Blog Tutorial</h1>
          <p> This is the description of the blog built with Nest.js, Vue.js and MongoDB</p>
      </div>

        <div class="row">
           <div class="col-md-4" v-for="post in posts" :key="post.id">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                   <h2 class="card-img-top">{{ post.title }}</h2>
                  <p class="card-text">{{ post.body }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group" style="margin-bottom: 20px;">
                      <router-link :to="{name: 'Post', params: {id: post.id}}" class="btn btn-sm btn-outline-secondary">View Post </router-link>
                       <router-link :to="{name: 'Edit', params: {id: post.id}}" class="btn btn-sm btn-outline-secondary">Edit Post </router-link>
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
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = POSTS;
  },
};
</script>

