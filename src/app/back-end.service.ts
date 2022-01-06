import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';

/*
DataBase Path
https://live-post-cdd23-default-rtdb.firebaseio.com/
 */

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //Func 1 - Save Data
  saveData() {
    //Step 1 : get list of posts from post.Service
    const listOfPosts: Post[] = this.postService.getPosts();

    //Step 2 : send list of posts to backend
    this.http
      .put(
        'https://live-post-cdd23-default-rtdb.firebaseio.com/post.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //Func 2 - Fetch Data
  fetchData() {
    //Step 1
    this.http
      /** <Post> means Type of data that we will recieve */
      .get<Post[]>(
        'https://live-post-cdd23-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          //Step 2 - Send to post.service
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
