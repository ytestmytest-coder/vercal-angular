import { Routes } from '@angular/router';
import { Contact } from './features/contact/contact';
import { Aboutus } from './features/aboutus/aboutus';
import { MainLayout } from './layout/main-layout/main-layout';
import { Blog } from './features/blog/blog';
import { Blogdetails } from './features/blogdetails/blogdetails';
import { NotFound } from './features/not-found/not-found';
import { Saveblog } from './features/saveblog/saveblog';


export const routes: Routes = [

    { path: 'aboutus', component: Aboutus },
    { path: 'contact', component: Contact },
    { path: '', component: Blog },
    { path: 'blog/:id', component: Blogdetails },
    { path: 'create', component: Saveblog },
    { path: '**', component: NotFound }

];
