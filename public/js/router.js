import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/HomeComponent';
import EditComponent from './components/post/Edit';
import CreateComponent from './components/post/Create';
import PostComponent from './components/post/Post';

Vue.use(VueRouter);


const routes = [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
    { path: '/post/:id', name: 'Post', component: PostComponent }
]

const router = new VueRouter({
    routes
})

export default router;