import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent)
    },

    {
        path: 'users/posts/:id',
        loadComponent: () => import('./pages/user-posts/user-posts.component').then(m => m.PostsComponent)
    },

    {
        path: 'posts',
        loadComponent: () => import('./pages/posts-list/posts-list.component').then(m => m.PostsListComponent)
    },

    {
        path: 'users/todo-list/:id',
        loadComponent: () => import('./pages/todo-list/todo-list.component').then(m => m.TodoListComponent)
    },

    {
        path: 'shares',
        loadComponent: () => import('./pages/shares/shares.component').then(m => m.SharesComponent)
    },
];
