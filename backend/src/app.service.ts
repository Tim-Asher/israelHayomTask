import { Injectable } from '@nestjs/common'; // Importing the Injectable decorator from NestJS to make this class injectable

@Injectable() // The Injectable decorator marks the class as a service that can be injected into other classes (such as controllers).
export class AppService {
  // This is the method that will return a string message
  getHello(): string {
    return 'Hello World!'; // Simply returns the string 'Hello World!' when called
  }
}
