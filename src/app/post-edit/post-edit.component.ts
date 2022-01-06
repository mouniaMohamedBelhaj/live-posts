import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath1 = '';
    let imagePath2 = '';
    let imagePath3 = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index'];

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath1 = post.imagePath1;
        imagePath2 = post.imagePath2;
        imagePath3 = post.imagePath3;

        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath1: new FormControl(imagePath1, [Validators.required]),
      imagePath2: new FormControl(imagePath2),
      imagePath3: new FormControl(imagePath3),
    });

  }

  onSubmit() {
    
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath1 = this.form.value.imagePath1;
    const imagePath2 = this.form.value.imagePath2;
    const imagePath3 = this.form.value.imagePath3;

    //Ready with Object
    const post: Post = new Post(
      title,
      description,
      imagePath1,
      imagePath2,
      imagePath3,
      '@test',
      new Date(),
      0      
    );
    
    //calling Service
    if (!this.editMode) {
      this.postService.addPost(post);
    } else {
      this.postService.updatePost(this.index, post);
    }

    //Navigate to post-list
    this.router.navigate(['/post-list']);
  }
}
