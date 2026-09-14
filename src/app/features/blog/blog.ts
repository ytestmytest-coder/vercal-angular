import { Component } from '@angular/core';
import { blogs } from './const/blogs.data';
import { BlogService } from './service/blog-service';
import { blog } from './models/blog';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  blogs: blog[] = [];

  constructor(private blogservice: BlogService) { 
    
  }

  ngOnInit() {
   this.getBlogsData();
  }

  getBlogsData() {
    this.blogservice.getBlogsData().subscribe(data => {
      this.blogs = data;
    });
  }
  showBlog(id:number){
     this.blogservice.getBlogData(id).subscribe(data => {
     console.log(data);
    });
    
  }
}
