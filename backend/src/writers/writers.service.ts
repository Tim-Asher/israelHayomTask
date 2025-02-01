import { Injectable } from '@nestjs/common'; // Import Injectable decorator to define a service
import { InjectModel } from '@nestjs/mongoose'; // Import InjectModel decorator to inject Mongoose models into the service
import { Model } from 'mongoose'; // Import Model to interact with MongoDB collections
import { Writer } from './schemas/writer.schema'; // Import Writer schema
import { Post } from '../posts/schemas/post.schema'; // Import Post schema

@Injectable() // Marks the class as a service that can be injected into other parts of the application
export class WritersService {
  constructor(
    @InjectModel(Writer.name) private writerModel: Model<Writer>, // Inject the Writer model to interact with the writers collection
    @InjectModel(Post.name) private postModel: Model<Post>, // Inject the Post model to interact with the posts collection
  ) {}

  /**
   * Fetches 10 writers, each with their latest 3 posts, sorted by the most recent post date.
   * @returns Promise that resolves to an array of writers with their latest posts
   */
  async getWritersWithPosts() {
    return this.writerModel.aggregate([
      // Using MongoDB aggregation pipeline to fetch writers with posts
      {
        $lookup: {
          // Perform a left join between the writers and posts collections
          from: 'posts', // The posts collection
          localField: 'id', // Writer ID in the writers collection
          foreignField: 'writerId', // Writer ID in the posts collection
          as: 'posts', // Store the matching posts in the 'posts' field
        },
      },
      {
        $addFields: {
          // Add additional fields to the writer object
          latest_posts: {
            $slice: [
              // Limit the number of posts to the 3 most recent ones
              { $sortArray: { input: '$posts', sortBy: { created_at: -1 } } }, // Sort the posts by creation date in descending order
              3, // Get only the 3 most recent posts
            ],
          },
          latest_post_date: { $max: '$posts.created_at' }, // Get the creation date of the most recent post
        },
      },
      {
        $project: {
          // Exclude the full posts array and keep only the latest posts
          posts: 0, // Remove the 'posts' field from the result
        },
      },
      {
        $sort: { latest_post_date: -1 }, // Sort writers by the latest post date in descending order (newest first)
      },
      {
        $limit: 10, // Limit the result to only 10 writers
      },
    ]);
  }
}
