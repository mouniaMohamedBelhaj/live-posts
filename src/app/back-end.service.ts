import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //Func 1 - Save Data
  saveData() {
    //Step 1 : get list of posts from post.Service
    const listOfPosts: Post[] = this.postService.getPosts();

    console.log('save dataa :'+listOfPosts);
    

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

            //Step 2 - Send to post.service
          if(!listOfPosts)
            this.postService.setPosts([])
          else
            this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
