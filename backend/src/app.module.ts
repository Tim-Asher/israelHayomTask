import { Module } from '@nestjs/common'; // Importing the Module decorator from NestJS to define the app module
import { DatabaseModule } from './database/database.module'; // Import the DatabaseModule, which handles the database connection and schemas
import { WritersModule } from './writers/writers.module'; // Import the WritersModule for functionality related to writers
import { PostsModule } from './posts/posts.module'; // Import the PostsModule for functionality related to posts

@Module({
  // The 'imports' array specifies which other modules should be included in this module.
  imports: [DatabaseModule, WritersModule, PostsModule], // This app module depends on the Database, Writers, and Posts modules
})
export class AppModule {} // The AppModule is the root module of the application, responsible for bootstrapping and initializing the app
