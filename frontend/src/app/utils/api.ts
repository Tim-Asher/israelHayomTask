import axios from "axios"; // Import Axios for making HTTP requests

// Base API URL - Default to local development URL, but can be overridden by the environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

/**
 * Fetch data from a given endpoint.
 * @param endpoint API endpoint (e.g., '/writers' or '/posts')
 * @returns Promise with the fetched data
 */
export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    // Making a GET request using Axios, passing the base URL and the endpoint
    const response = await axios.get<T>(`${API_BASE_URL}${endpoint}`);
    return response.data; // Return the fetched data
  } catch (error) {
    // Log error details if the request fails
    console.error(`Error fetching ${endpoint}:`, error);
    throw error; // Re-throw the error for handling in the calling function
  }
};
