import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { blog } from '../models/blog';
import { blogs } from '../const/blogs.data';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  getBlogsData(): Observable<blog[]> {
    return of(blogs);
  }

  getBlogData(id: number): Observable<blog | undefined> {
    return of(blogs.find(blog => blog.id === id));
  }

  saveUpdatedBlog(updatedBlog: blog): Observable<blog> {
    const index = blogs.findIndex(
      b => b.id === updatedBlog.id
    );
    if (index === -1) {
      throw new Error('Blog not found');
    }
    blogs[index] = updatedBlog;

    return of(updatedBlog);
  }
}
