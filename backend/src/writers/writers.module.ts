import { Module } from '@nestjs/common'; // Import the Module decorator to define a NestJS module
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule to integrate MongoDB with NestJS
import { WritersService } from './writers.service'; // Import the WritersService to handle the business logic for writers
import { WritersController } from './writers.controller'; // Import the WritersController to handle the HTTP requests for writers
import { Writer, WriterSchema } from './schemas/writer.schema'; // Import the Writer schema and model for MongoDB
import { Post, PostSchema } from '../posts/schemas/post.schema'; // Import the Post schema and model
import { PostsModule } from '../posts/posts.module'; // Import the PostsModule to ensure PostModel is available for dependency injection

@Module({
  imports: [
    MongooseModule.forFeature([
      // Register the schemas in Mongoose so they can be used with the service
      { name: Writer.name, schema: WriterSchema }, // Register Writer model with its schema
      { name: Post.name, schema: PostSchema }, // Register Post model with its schema
    ]),
    PostsModule, // Import PostsModule to make the Post model available in this module (and its service)
  ],
  controllers: [WritersController], // Declare the controller to handle incoming requests
  providers: [WritersService], // Declare the service to contain the business logic
})
export class WritersModule {}
