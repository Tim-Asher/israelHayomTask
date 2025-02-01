import { Controller, Get } from '@nestjs/common'; // Import Controller and Get decorators from NestJS to handle routing
import { WritersService } from './writers.service'; // Import the WritersService to handle the logic for writers

@Controller('writers') // Define the base route for this controller (e.g., /writers)
export class WritersController {
  constructor(private readonly writersService: WritersService) {} // Inject the WritersService into the controller

  // Define a route to fetch writers with their posts
  @Get('/with-posts') // HTTP GET request at the '/writers/with-posts' endpoint
  async getWritersWithPosts() {
    return this.writersService.getWritersWithPosts(); // Call the service method to get writers with posts
  }
}
