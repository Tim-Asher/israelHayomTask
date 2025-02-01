import { Module } from '@nestjs/common'; // Import Module decorator from NestJS to define a module
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule to integrate MongoDB with NestJS
import { PostsService } from './posts.service'; // Import the service to handle business logic for posts
import { PostsController } from './posts.controller'; // Import the controller to handle HTTP requests related to posts
import { Post, PostSchema } from './schemas/post.schema'; // Import Post schema and model to interact with MongoDB

@Module({
  imports: [
    // Register the Post model with Mongoose to integrate the schema into the module
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController], // Register PostsController to handle HTTP requests for posts
  providers: [PostsService], // Register PostsService to handle the logic for posts
})
export class PostsModule {} // Define the PostsModule that bundles the service and controller
