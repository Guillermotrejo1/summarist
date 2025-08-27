import Layout from "@/components/Layout";
import Recommended from "@/components/Recommended";
import Selected from "@/components/Selected";
import Suggested from "@/components/Suggested";
import axios from "axios";
import React from "react";


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

const ForYou = ({
  recommendedBooks,
  selectedBooks,
  suggestedBooks,
}: {
  recommendedBooks: Book[];
  selectedBooks: Book[];
  suggestedBooks: Book[];
}) => {

   // Function to change font size
  const handleFontSizeChange = (size: string) => {
    console.log(`Font size changed to: ${size}`);
  };
  
  return (
    <Layout onFontSizeChange={handleFontSizeChange}>
      <div className="flex flex-col items-center justify-center md:ml-50">
        <div className="py-10 w-full md:ml-30 h-auto">
          <div className="max-w-[1070px] w-full m-auto px-6">
            <Selected book={selectedBooks[0]} isLoading={false}/>
            <Recommended books={recommendedBooks} isLoading={false} />
            <Suggested books={suggestedBooks} isLoading={false}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const [recommendedRes, selectedRes, suggestedRes] = await Promise.all([
      axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
      ),
      axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
      ),
      axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
      ),
    ]);
    return {
      props: {
        recommendedBooks: recommendedRes.data.slice(0, 8),
        selectedBooks: selectedRes.data.slice(0, 8),
        suggestedBooks: suggestedRes.data.slice(0, 8),
      },
    };
  } catch {
    return {
      props: {
        recommendedBooks: [],
        selectedBooks: [],
        suggestedBooks: [],
      },
    };
  }
}

export default ForYou;