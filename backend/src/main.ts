import { NestFactory } from '@nestjs/core'; // Import NestFactory to create and initialize the NestJS application.
import { AppModule } from './app.module'; // Import the main application module, where all other modules are aggregated.
import * as dotenv from 'dotenv'; // Import dotenv to load environment variables from a .env file.
import { MongoDBService } from './database/mongodb.service'; // Import MongoDBService to seed the database during startup.

dotenv.config(); // Load environment variables from a .env file.

async function bootstrap() {
  // Create the NestJS application using the AppModule.
  const app = await NestFactory.create(AppModule);

  // Enable Cross-Origin Resource Sharing (CORS) for the frontend (running on http://localhost:3000)
  app.enableCors({
    origin: 'http://localhost:3000', // Allow only this domain to make requests.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods.
    credentials: true, // Allow credentials like cookies.
  });

  // Get an instance of MongoDBService from the application context.
  const mongoDBServise = app.get(MongoDBService);

  // Call the seedDatabase method to populate the database with mock data.
  await mongoDBServise.seedDatabase();

  // Start the application on the specified port (from environment variable or default to 8080).
  await app.listen(process.env.PORT ?? 8080);
}

bootstrap(); // Call the bootstrap function to initialize the application.
