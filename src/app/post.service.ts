import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {


  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  
  listOfPosts: Post[] = [];

  //facility 1
  getPosts() {
    return this.listOfPosts;
  }

  //facility 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  //facility 3
  addPost(post: Post) {
    console.log(this.listOfPosts);
    
    this.listOfPosts.push(post);
  }
  //facility 4
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  //facility 5
  getPost(index: number) {
    return this.listOfPosts[index];
  }
  //facility 6
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }

  //facility 7
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
