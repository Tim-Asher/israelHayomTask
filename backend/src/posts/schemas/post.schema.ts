import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; // Import decorators and helpers for defining Mongoose schemas
import { Document } from 'mongoose'; // Import Document to extend from for Mongoose models

// Define the Post schema for the 'posts' collection with automatic timestamping
@Schema({ collection: 'posts', timestamps: true })
export class Post extends Document {
  @Prop({ require: true, unique: true }) // The 'id' property is required and must be unique
  id: number; // Unique identifier for the post

  @Prop({ require: true }) // The 'title' property is required
  title: string; // Title of the post

  @Prop({ required: true }) // The 'created_at' property is required
  created_at: Date; // Date when the post was created

  @Prop({ required: true }) // The 'post_url' property is required
  post_url: string; // URL to the individual post

  @Prop({ required: true }) // The 'writerId' property is required
  writerId: number; // The ID of the writer who created the post
}

// Generate the Mongoose schema based on the Post class
export const PostSchema = SchemaFactory.createForClass(Post);
