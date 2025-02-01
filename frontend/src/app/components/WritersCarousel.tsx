"use client"; // Indicates that this file is client-side only

import { useEffect, useState } from "react"; // Import React hooks
import { Navigation, Pagination } from "swiper/modules"; // Import specific modules for Swiper (carousel)
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components

// Import necessary styles for Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import custom components and types
import WriterCard from "./WriterCard";
import { Writer } from "../types/globalTypes";

// Import icons
import { MdArrowForwardIos } from "react-icons/md";

// Import utility function for fetching data
import { fetchData } from "../utils/api";

const WritersCarousel = () => {
  const [writers, setWriters] = useState<Writer[]>([]); // State for storing writers' data
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading indicator

  // Async function to fetch writers' data
  const getWriters = async () => {
    try {
      const data = await fetchData<Writer[]>("/writers/with-posts"); // Fetch data from API
      setWriters(data); // Set the fetched data to state
    } catch (err) {
      console.log(err); // Log errors if fetching fails
    }
    setIsLoading(false); // Set loading to false after data is fetched
  };

  // Fetch writers' data on component mount
  useEffect(() => {
    getWriters();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // If data is still loading, show skeleton loaders
  if (isLoading) {
    return (
      <>
        {/* Skeleton loader for larger screens */}
        <div className="hidden w-[90%] items-center gap-1 p-3 sm:flex">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="h-[150px] w-[33%] animate-pulse rounded-md bg-Graycustom/60"
              style={{
                animationDelay: `${index * 0.1}s`, // Stagger animation delays
                animationDuration: "1s", // Set animation duration
              }}
            ></div>
          ))}
        </div>
        {/* Skeleton loader for smaller screens */}
        <div className="flex w-[100%] items-center gap-1 p-3 sm:hidden">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className="h-[320px] w-[50%] animate-pulse rounded-md bg-Graycustom/60 sm:h-[150px] sm:w-[33%]"
              style={{
                animationDelay: `${index * 0.1}s`, // Stagger animation delays
                animationDuration: "1s", // Set animation duration
              }}
            ></div>
          ))}
        </div>
      </>
    );
  }

  // Return the main JSX when data is loaded
  return (
    <div className="flex w-full items-center justify-center">
      {/* Custom Previous Button for Swiper */}
      <button className="button-prev hidden rotate-180 text-redcustom sm:block">
        <MdArrowForwardIos size={50} /> {/* Icon for arrow */}
      </button>

      {/* Swiper Component for the Carousel */}
      <Swiper
        spaceBetween={3} // Space between slides
        navigation={{
          nextEl: ".button-next", // Next button selector
          prevEl: ".button-prev", // Previous button selector
        }}
        modules={[Navigation]} // Enable navigation module
        className="w-[100%]"
        breakpoints={{
          // Breakpoints for responsive design: number of slides visible on different screen sizes
          360: { slidesPerView: 1.5 },
          470: { slidesPerView: 2 },
          580: { slidesPerView: 2.5 },
          640: { slidesPerView: 1.5 },
          840: { slidesPerView: 2 },
          1020: { slidesPerView: 2.5 },
          1220: { slidesPerView: 3 },
          1400: { slidesPerView: 3.5 },
          1600: { slidesPerView: 4 },
          1700: { slidesPerView: 4.5 },
        }}
      >
        {/* Map over the writers data and render each WriterCard in a SwiperSlide */}
        {writers?.map((writer) => (
          <SwiperSlide key={writer.id}>
            <WriterCard writer={writer} />{" "}
            {/* Pass writer data to WriterCard component */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next Button for Swiper */}
      <button className="button-next hidden text-redcustom sm:block">
        <MdArrowForwardIos size={50} /> {/* Icon for arrow */}
      </button>
    </div>
  );
};

export default WritersCarousel; // Export the WritersCarousel component
