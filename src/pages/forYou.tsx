import Recommened from "@/components/Recommened";
import SearchBar from "@/components/SearchBar";
import Selected from "@/components/Selected";
import Sidebar from "@/components/Sidebar";
import Suggested from "@/components/Suggested";
import React from "react";

const forYou = () => {
  return (
    <div>
      <Sidebar />
      <SearchBar />
      <div className="py-10 w-[calc(100%-200px)] ml-50 h-screen">
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
