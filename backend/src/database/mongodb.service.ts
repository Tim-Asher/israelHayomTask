import { Injectable } from '@nestjs/common'; // Import Injectable decorator to mark the service as injectable
import { InjectModel } from '@nestjs/mongoose'; // Import InjectModel to inject Mongoose models
import { Model } from 'mongoose'; // Import Model type from Mongoose for type safety
import { Writer } from '../writers/schemas/writer.schema'; // Import Writer schema for data operations
import { Post } from '../posts/schemas/post.schema'; // Import Post schema for data operations
import * as mongoose from 'mongoose'; // Import mongoose to work with MongoDB
import { writersMockData } from '../data/writers.mock'; // Import mock data for writers
import { postsMockData } from '../data/posts.mock'; // Import mock data for posts

@Injectable() // Mark MongoDBService as a service that can be injected into other components
export class MongoDBService {
  // Inject the Mongoose models for Writer and Post
  constructor(
    @InjectModel(Writer.name) private writerModel: Model<Writer>, // Inject Writer model for database operations
    @InjectModel(Post.name) private postModel: Model<Post>, // Inject Post model for database operations
  ) {}

  // Method to seed the database with mock data
  async seedDatabase() {
    try {
      // Delete all existing records from the Writer and Post collections
      await this.writerModel.deleteMany();
      await this.postModel.deleteMany();

      // Insert mock data into the Writer and Post collections
      await this.writerModel.insertMany(writersMockData);
      await this.postModel.insertMany(postsMockData);

      console.log('Database seeded successfully!'); // Log success message
    } catch (err) {
      console.error('Error seeding database:', err); // Log any errors during the seeding process
    }
  }
}
