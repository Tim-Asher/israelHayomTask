import { Injectable } from '@nestjs/common'; // Import Injectable decorator to mark this service as injectable
import { InjectModel } from '@nestjs/mongoose'; // Import InjectModel decorator to inject Mongoose models
import { Model } from 'mongoose'; // Import Model class from mongoose to interact with MongoDB collections
import { Post } from './schemas/post.schema'; // Import the Post schema for the posts collection
import { CreatePostDto } from './dto/create-post.dto'; // Import the DTO for creating posts (though it's not yet used in this code)

@Injectable() // Mark this class as a service that can be injected into other components
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {} // Inject the Post model into the service

  // Fetch all posts from the database
  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec(); // Use Mongoose's find() to retrieve all posts and exec() to execute the query
  }
}
