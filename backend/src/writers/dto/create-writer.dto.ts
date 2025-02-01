import { IsNotEmpty, IsString, IsNumber } from 'class-validator'; // Import validation decorators to enforce rules on the DTO properties

export class CreateWriterDto {
  @IsNumber() // Validate that 'id' is a number
  id: number; // Writer's unique identifier

  @IsString() // Validate that 'name' is a string
  @IsNotEmpty() // Ensure that 'name' is not empty
  name: string; // Writer's name

  @IsString() // Validate that 'image_url' is a string
  @IsNotEmpty() // Ensure that 'image_url' is not empty
  image_url: string; // URL of the writer's image

  @IsString() // Validate that 'page_url' is a string
  @IsNotEmpty() // Ensure that 'page_url' is not empty
  page_url: string; // URL to the writer's page
}
