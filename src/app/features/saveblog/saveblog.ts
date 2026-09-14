import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { blog } from '../blog/models/blog';
import { CommonUtil } from '../../shared/CommonUtil';
import { blogs } from '../blog/const/blogs.data';

@Component({
  selector: 'app-saveblog',
  imports: [FormsModule],
  templateUrl: './saveblog.html',
  styleUrl: './saveblog.css',
})
export class Saveblog {
  blogDetails: blog = {
    id: 0,
    title: '',
    description: '',
    author: '',
    date: ''
  };

  saveBlog() {
    this.blogDetails.id = blogs.length+1;
    console.log(this.blogDetails)
  }

}
