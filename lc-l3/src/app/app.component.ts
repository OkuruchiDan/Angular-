import { Component } from '@angular/core';
import {UserModel} from '../Models/UserModel';
import {PostModel} from '../Models/PostModel';
import {CommentModel} from '../Models/CommentModel';
import {UserService} from './service/user.service';
import {PostService} from './service/post.service';
import {CommentService} from './service/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lc-l3';

  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];

  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService) {
    this.userService.getUsers().subscribe(users => this.users = users);
    this.postService.getPosts().subscribe(posts => this.posts = posts);
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }
}
