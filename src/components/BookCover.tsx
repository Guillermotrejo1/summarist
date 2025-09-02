import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import Image from "next/image";
import { Book } from "./Suggested";
import Link from "next/link";
import { DocumentData } from "firebase/firestore";

interface BookCoverProps {
  book: Book;
  userData: DocumentData | null;
}

const BookCover = ({ book, userData }: BookCoverProps) => {
  return (
    <div>
      <Link
        key={book.id}
        href={`book/${book.id}`}
        className="pt-[32px] pr-[12px] pb-[12px] pl-[12px] rounded-sm hover:bg-[#f4f5f5d4] flex items-center justify-center relative"
      >
        <div>
          {book.subscriptionRequired && !userData?.isPremium && (
            <div className="absolute top-1 right-2 bg-[#032b41] text-white text-[10px] font-bold py-1 px-2 rounded-full">
              Premium
            </div>
          )}
          <Image
            src={book.imageLink}
            width={170}
            height={100}
            alt={book.title}
          />
          <h2 className="font-bold text-[#032b41] mb-2 line-clamp-2 w-[150px]">
            {book.title}
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            {book.author}
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">{book.subTitle}</h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">03:24</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">
                {book.averageRating}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCover;
