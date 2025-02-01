import { Controller, Get } from '@nestjs/common'; // Import decorators for creating routes and handling HTTP requests
import { AppService } from './app.service'; // Import the AppService to interact with the business logic

@Controller() // Define the base route for the controller (in this case, it will map to the root "/")
export class AppController {
  // Inject the AppService into the controller
  constructor(private readonly appService: AppService) {}

  // Define a GET endpoint for the root route
  @Get() // This decorator handles GET requests to the root URL ("/")
  getHello(): string {
    // Call the method from AppService and return the result as a string
    return this.appService.getHello();
  }
}
