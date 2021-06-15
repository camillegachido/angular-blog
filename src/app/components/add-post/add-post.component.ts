import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public post: BlogPostModel = new BlogPostModel();

  @Output() addEvent = new EventEmitter<BlogPostModel>();

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.addEvent.emit({titulo: this.post.titulo, src: this.post.src, texto: this.post.texto, curtido: this.post.curtido});
  }

}
