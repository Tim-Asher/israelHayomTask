import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; // Import necessary decorators and functions from Mongoose to define the schema
import { Document } from 'mongoose'; // Import Document class to extend it for Mongoose documents

@Schema({ collection: 'writers', timestamps: true }) // Define the schema for the 'writers' collection with automatic timestamping
export class Writer extends Document {
  @Prop({ require: true, unique: true }) // Mark 'id' as a required unique field
  id: number; // Writer's unique identifier

  @Prop({ required: true }) // Mark 'name' as a required field
  name: string; // Writer's name

  @Prop({ required: true }) // Mark 'image_url' as a required field
  image_url: string; // URL for the writer's profile image

  @Prop({ required: true }) // Mark 'page_url' as a required field
  page_url: string; // URL to the writer's page
}

// Create the schema from the Writer class
export const WriterSchema = SchemaFactory.createForClass(Writer);
