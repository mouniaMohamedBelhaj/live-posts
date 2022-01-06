import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Nature, in the broadest sense, is the natural, physical, material world or universe. Nature can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only,  part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.',
      'https://wallpaperaccess.com/full/1204217.jpg',
      'https://eskipaper.com/images/nature-wallpaper-hd-4.jpg',
      'https://eskipaper.com/images/nature-wallpapers-hd-24.jpg',
      '@nature',
      new Date(),
      5
    ),
    new Post(
      'Ocean',
      "The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.[1] Another definition is 'any of the large bodies of water into which the great ocean is divided'.[2] Separate names are used to identify five different areas of the ocean: Pacific (the largest), Atlantic, Indian, Southern (Antarctic), and Arctic (the smallest).[3][4] Seawater covers approximately 361,000,000 km2 (139,000,000 sq mi) of the planet. The ocean is the principal component of Earth's hydrosphere, and therefore integral to life on Earth. Acting as a huge heat reservoir, the ocean influences climate and weather patterns, the carbon cycle, and the water cycle.",
      'https://wallpapermemory.com/uploads/356/ocean-background-hd-1600x900-392651.jpg',
      'https://images.wallpapersden.com/image/download/blue-sea-4k_a2poa2eUmZqaraWkpJRma2VlrW5lZQ.jpg',
      'https://wallpaperaccess.com/full/2537736.jpg',
      '@ocean',
      new Date(),
      2
    ),
    new Post(
      'Forest',
      "A forest is an area of land dominated by trees.[1] Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing, and ecological function.[2][3][4] The United Nations' Food and Agriculture Organization (FAO) defines a forest as, 'Land spanning more than 0.5 hectares with trees higher than 5 meters and a canopy cover of more than 10 percent, or trees able to reach these thresholds in situ. It does not include land that is predominantly under agricultural or urban use.'[5] Using this definition, Global Forest Resources Assessment 2020 (FRA 2020) found that forests covered 4.06 billion hectares (10.0 billion acres; 40.6 million square kilometres; 15.7 million square miles), or approximately 31 percent of the world's land area in 2020.",
      'https://wallpaperaccess.com/full/3126518.jpg',
      'https://images.wallpapersden.com/image/download/forest-road-trees_ZmptaGiUmZqaraWkpJRma2VlrW5lZQ.jpg',
      'https://eskipaper.com/images/forest-path-wallpaper-3.jpg',
      '@forest',
      new Date(),
      8
    ),
    new Post(
      'Sky',
      "The sky is the panorama obtained from observing the universe from the Earth and other celestial bodies' surface.In the field of astronomy, the sky is also called the celestial sphere. This is an abstract sphere, concentric to the Earth, on which the Sun, Moon, planets, and stars appear to be drifting. The celestial sphere is conventionally divided into designated areas called constellations.",
      'https://www.wallpapertip.com/wmimgs/6-61059_hd-clouds-wallpapers-sky-and-clouds.jpg',
      'https://images.hdqwalls.com/download/starry-sky-u0-1600x900.jpg',
      'https://wallpaperaccess.com/full/2591608.jpg',
      '@sky',
      new Date(),
      9
    ),
  ];

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
