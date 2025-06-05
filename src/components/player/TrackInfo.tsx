import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

const TrackInfo = () => {
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );
        setCurrentBook(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex">
        <figure>
            {currentBook?.imageLink ? (
                <Image 
                    className="ml-8" 
                    src={currentBook.imageLink} 
                    alt="" 
                    width={50} 
                    height={50} 
                />
            ) : (
                <div className="fallback-image" style={{ width: "50px", height: "50px", background: "#ccc" }}>No Image</div>
            )}
        </figure>
        <div className="flex flex-col ml-2 justify-center">
            <h2 className="text-sm">{currentBook?.title}</h2>
            <h3 className="text-sm text-[#bac8ce]">{currentBook?.author}</h3>
        </div>
    </div>
);
}

export default TrackInfo;
