import { Module } from '@nestjs/common'; // Import Module decorator from NestJS
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule to integrate MongoDB with NestJS
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule to manage environment variables
import { MongoDBService } from './mongodb.service'; // Import MongoDB service to interact with the database
import { Writer, WriterSchema } from '../writers/schemas/writer.schema'; // Import Writer model and schema
import { Post, PostSchema } from '../posts/schemas/post.schema'; // Import Post model and schema

@Module({
  imports: [
    ConfigModule.forRoot(), // Initialize ConfigModule to load environment variables from .env
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION || ''), // Set up the MongoDB connection using the connection string from environment variables
    MongooseModule.forFeature([
      // Register the Writer and Post models with Mongoose
      { name: Writer.name, schema: WriterSchema },
      { name: Post.name, schema: PostSchema },
    ]),
  ],
  providers: [MongoDBService], // Declare MongoDBService as a provider to be injected where needed
  exports: [MongoDBService], // Export MongoDBService to make it available in other modules
})
export class DatabaseModule {} // Define the DatabaseModule that sets up the database connection and models
