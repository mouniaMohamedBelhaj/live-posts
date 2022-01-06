export class Post {
  constructor(
    public title: string,
    public description: string,
    public imagePath1: string,
    public imagePath2: string,
    public imagePath3: string,
    public author: string,
    public datetimeCreated: Date,
    public numberOfLikes: number
  ) {}
}
