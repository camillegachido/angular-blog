import { Component, Input, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input()
  public post: BlogPostModel | undefined;
​
  constructor() { }

  ngOnInit(): void {
  }

  curtir():void {
    this.post? this.post.curtido = !this.post.curtido :  false;
  }

}
