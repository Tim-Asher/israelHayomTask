import Image from "next/image"; // Import Next.js Image component for optimized image handling
import WritersCarousel from "./components/WritersCarousel"; // Import WritersCarousel component

// Main Home component
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 font-arial text-blackcustom">
      {/* Header section */}
      <header>
        <Image
          src={"/images/logo/israelhayom.jpg"} // Path to the logo image
          width={400} // Set the image width to 400px
          height={400} // Set the image height to 400px
          alt="Israel Hayom Img" // Alt text for the image
          priority // Ensure the image is loaded first for performance
          className="h-auto w-auto object-contain" // Styling to maintain aspect ratio and containment
        />
      </header>
      {/* Section for the title */}
      <div className="block w-full">
        <p className="mx-2 border-r-8 border-redcustom px-3 text-right text-[28px] font-bold leading-8">
          כותבי הטורים {/* "Column Writers" in Hebrew */}
        </p>
      </div>
      {/* Writers carousel section */}
      <WritersCarousel /> {/* This renders the WritersCarousel component */}
      {/* Footer section */}
      <footer>
        <p className="text-black">By Tim Asher</p>{" "}
        {/* Display footer text with my name :) */}
      </footer>
    </main>
  );
}
