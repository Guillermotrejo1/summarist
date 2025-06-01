import Recommened from "@/components/Recommened";
import SearchBar from "@/components/SearchBar";
import Selected from "@/components/Selected";
import Sidebar from "@/components/Sidebar";
import Suggested from "@/components/Suggested";
import React from "react";


const forYou = () => {
  return (
    <div className="flex bg-amber-500 flex-col items-center justify-center">
      <Sidebar />
      <SearchBar />
      <div className="flex items-center justify-center py-10 w-[calc(100%-400px)]">
        <div className="max-w-[1070px] w-full m-auto px-6">
          <Selected />
          <Recommened />
          <Suggested/>
        </div>
      </div>
    </div>
  );
};



export default forYou;
