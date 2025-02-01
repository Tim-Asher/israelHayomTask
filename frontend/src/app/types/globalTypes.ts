// Writer interface defines the structure of the writer object
export interface Writer {
  id: number; // Unique identifier for the writer
  name: string; // Writer's name
  image_url: string; // URL to the writer's profile image
  page_url: string; // URL to the writer's full profile page
  latest_posts: Post[]; // Array of latest posts made by the writer
}

// Post interface defines the structure of each post object
interface Post {
  id: number; // Unique identifier for the post
  title: string; // Title of the post
  created_at: string; // Date when the post was created (could be in ISO string format)
  post_url: string; // URL to the individual post page
}
