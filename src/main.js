import { createApp } from 'vue'
import App from './App.vue'
import Home from "@/components/Home";
import Books from "@/components/books/Books";
import Book from "./components/books/Book"
import Genres from "@/components/genres/Genres";
import Genre from "@/components/genres/Genre";
import GenreForm from "@/components/genres/GenreForm";
import { createRouter,createWebHistory} from 'vue-router'
import Users from "@/components/users/Users";
import User from "@/components/users/User";
import UserForm from "@/components/users/UserForm";
import BookForm from "@/components/books/BookForm";
import Reviews from "@/components/reviews/Reviews";
import ReviewForm from "@/components/reviews/ReviewForm";

const routes = [
    {path: '/', component: Home},
    {name: 'books', path: '/books/:link/:genresLink/:users/:reviewsLink', component: Books},
    {name: 'book', path: '/books/book/:link/:genresLink/:users/:reviewsLink', component: Book},
    {name: 'bookForm', path: '/books/create/:title/:request/:link/:redirectLink/:route/:genresLink/:users', component: BookForm},

    {name: 'genres', path: '/genres/:link/:users', component: Genres},
    {name: 'genre', path: '/genres/genre/:link/:users', component: Genre},
    {name: 'genreForm', path: '/genres/create/:title/:request/:link/:redirectRoute/:redirectUrl/:users', component: GenreForm},

    {name: 'users', path:'/users/:link', component: Users},
    {name: 'user', path: '/users/user/:link', component: User},
    {name: 'userForm', path: '/users/create/:title/:request/:link/:redirectLink/:route', component: UserForm},

    {name: 'reviews', path: '/books/book/:link/:title/:users', component: Reviews, props: true},
    {name: 'reviewForm', path: '/books/book/createReview/:link/:title/:users/:request/:redirectRoute/:redirectUrl/:reviewsLink/:genresLink', component: ReviewForm}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')