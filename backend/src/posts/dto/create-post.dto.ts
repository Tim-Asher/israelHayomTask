import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator'; // Import decorators from class-validator to apply validation rules

// DTO (Data Transfer Object) for creating a new post
export class CreatePostDto {
  @IsNumber() // Validate that the id is a number
  id: number; // Unique identifier for the post

  @IsString() // Validate that the title is a string
  @IsNotEmpty() // Ensure the title is not empty
  title: string; // Title of the post

  @IsDate() // Validate that created_at is a Date object
  created_at: Date; // Date when the post was created

  @IsString() // Validate that post_url is a string
  @IsNotEmpty() // Ensure the post URL is not empty
  post_url: string; // URL of the post

  @IsNumber() // Validate that writer_id is a number
  writer_id: number; // ID of the writer who created the post
}
