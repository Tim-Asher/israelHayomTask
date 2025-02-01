import { Controller, Get } from '@nestjs/common'; // Import Controller and Get decorators from NestJS for routing
import { PostsService } from './posts.service'; // Import the PostsService to handle the logic for fetching posts

@Controller('posts') // Define the base route for this controller (e.g., /posts)
export class PostsController {
  constructor(private readonly postsService: PostsService) {} // Inject the PostsService into the controller

  // You can add other HTTP methods (e.g., POST, PUT, DELETE) to handle different routes if needed
}
