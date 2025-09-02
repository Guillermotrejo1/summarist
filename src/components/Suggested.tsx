import Skeleton from "@mui/material/Skeleton";
import BookCover from "../components/bookCover";

export interface Book {
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

interface SuggestedProps {
  books: Book[];
  isLoading: boolean;
}

const Suggested = ({ books, isLoading }: SuggestedProps) => (
  <div className="py-16">
    <h1 className="text-[22px] font-bold text-[#032b41] mb-2">
      Suggested Books
    </h1>
    <h4 className="font-light text-[#394547] mb-4">Browse those books</h4>
    <div
      className="flex items-center gap-12 overflow-x-scroll max-w-5xl"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {isLoading
        ? new Array(5).fill(0).map((_, index) => (
            <div className="p-2" key={index}>
              <Skeleton variant="rectangular" width={170} height={170} />
              <h2>
                <Skeleton
                  variant="text"
                  width={170}
                  height={30}
                  sx={{ borderRadius: "0px" }}
                />
              </h2>
              <h3>
                <Skeleton
                  variant="text"
                  width={170}
                  height={30}
                  sx={{ borderRadius: "0px" }}
                />
              </h3>
              <h4>
                <Skeleton
                  variant="text"
                  width={150}
                  height={50}
                  sx={{ borderRadius: "0px" }}
                />
              </h4>
              <h4>
                <Skeleton
                  variant="text"
                  width={170}
                  height={30}
                  sx={{ borderRadius: "0px" }}
                />
              </h4>
            </div>
          ))
        : books.map((book) => <BookCover book={book} key={book.id} userData={null} />)}
    </div>
  </div>
);

export default Suggested;