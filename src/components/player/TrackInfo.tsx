import Image from "next/image";
// Removed unnecessary imports: useEffect, useState, axios, useRouter

interface TrackInfoProps {
  title: string;
  author: string;
  imageLink: string; // Receive imageLink as a prop
}

const TrackInfo = ({ title, author, imageLink }: TrackInfoProps) => {
  return (
    <div className="flex">
      <figure>
        {imageLink ? ( // Use the passed imageLink
          <Image
            className="ml-8"
            src={imageLink}
            alt={title || "Book cover"} // Add a descriptive alt text
            width={50}
            height={50}
          />
        ) : (
          <div className="fallback-image" style={{ width: "50px", height: "50px", background: "#ccc" }}>No Image</div>
        )}
      </figure>
      <div className="flex flex-col ml-2 justify-center">
        <h2 className="text-sm">{title}</h2> {/* Use the passed title */}
        <h3 className="text-sm text-[#bac8ce]">{author}</h3> {/* Use the passed author */}
      </div>
    </div>
  );
};

export default TrackInfo;