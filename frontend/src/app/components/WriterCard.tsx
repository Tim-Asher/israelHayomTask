import Image from "next/image"; // Importing Next.js Image component for optimized image handling
import Link from "next/link"; // Importing Next.js Link component for navigation
import { FC } from "react"; // Importing FC (Functional Component) type from React
import { IoMdArrowDropleft } from "react-icons/io"; // Importing an icon for the link button
import { Writer } from "../types/globalTypes"; // Importing the Writer type definition

// Interface for WriterCard props, expecting a 'writer' object
interface WriterCardProps {
  writer: Writer;
}

// Function to slice text to a given max length, appending "..." if the text exceeds the limit
const sliceText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text; // Return text if within the maxLength

  let words = text.split(" "); // Split text into words
  let endText = "";

  // Loop through each word and append until the text reaches maxLength
  for (let word of words) {
    if ((endText + word).length > maxLength) break; // Stop if adding the word exceeds maxLength
    endText += (endText ? " " : "") + word;
  }

  return endText + "..."; // Append "..." to the truncated text
};

// WriterCard component that receives 'writer' as a prop
const WriterCard: FC<WriterCardProps> = ({ writer }) => {
  return (
    <div className="mx-1 my-3 flex min-h-[320px] select-none flex-col items-center justify-evenly gap-3 overflow-hidden rounded-md p-3 text-center shadow-[0px_0px_4px_0px_#999999] sm:h-full sm:min-h-full sm:min-w-[340px] sm:flex-row-reverse sm:justify-around">
      {/* Profile picture container with aspect ratio */}
      <div className="relative aspect-square h-28 w-28">
        <Image
          src={writer.image_url} // Image URL from the writer's profile
          alt="Writer Profile" // Alt text for accessibility
          fill // Makes the image fill the container
          className="rounded-full border-2 border-redcustom object-cover" // Styling the image (rounded, with border)
        />
      </div>
      {/* Information section */}
      <div className="w-full font-bold sm:text-right">
        <p className="d text-[22px]">{writer.name}</p>{" "}
        {/* Display writer's name */}
        <div className="flex flex-col items-center text-[16px] text-Graycustom sm:items-end sm:text-nowrap">
          {/* Map through latest posts and display them as links */}
          {writer.latest_posts.map((post) => (
            <Link href={post.post_url} key={post.id} dir="rtl">
              {" "}
              {/* Link to the post */}
              {sliceText(post.title, 26)} {/* Truncate post title */}
            </Link>
          ))}
        </div>
        {/* "Read More" link */}
        <div className="text-[14px] text-redcustom">
          <Link
            href={writer.page_url} // Link to the writer's full page
            className="flex items-center justify-center font-bold sm:justify-start"
          >
            <IoMdArrowDropleft /> קרא עוד{" "}
            {/* Arrow icon and "Read More" text in Hebrew */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WriterCard; // Export the WriterCard component for use in other parts of the app
