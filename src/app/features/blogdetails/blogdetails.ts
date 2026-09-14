import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog/service/blog-service';
import { blog } from '../blog/models/blog';
import { FormsModule } from '@angular/forms';
import { CommonUtil } from '../../shared/CommonUtil';


@Component({
  selector: 'app-blogdetails',
  imports: [FormsModule],
  templateUrl: './blogdetails.html',
  styleUrl: './blogdetails.css',
})
export class Blogdetails {

  constructor(private route: ActivatedRoute, private service: BlogService, private router: Router) { }
  blogDetails: blog|undefined;

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.service.getBlogData(Number(param['id'])).subscribe((data) => {
        this.blogDetails=data
      })
    })
  }

  updatedBlogDetail(blogdetails:blog){
    const now = new Date();
    blogdetails.date = new Date().toDateString();
    blogdetails.author = CommonUtil.getUserName();
     this.service.saveUpdatedBlog(blogdetails).subscribe(
      {
      next: () => { this.router.navigate(['']);},
      error: (error) => { console.error('Update failed', error);}
  });
  }

}
