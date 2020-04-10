import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../Models/UserModel';
import {UserService} from './sevices/user.service';
import {PostModel} from '../Models/PostModel';
import {CommentModel} from '../Models/CommentModel';
import {PostService} from './sevices/post.service';
import {CommentService} from './sevices/comment.service';
import {AppModule} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  msg = 'users';
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];

  constructor(private userService: UserService ,
              private postService: PostService,
              private commentService: CommentService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
  }
}
