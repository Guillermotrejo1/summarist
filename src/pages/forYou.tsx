import Layout from "@/components/Layout";
import Recommended from "@/components/Recommened";
import Selected from "@/components/Selected";
import Suggested from "@/components/Suggested";
import React from "react";


const ForYou = () => {
  
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center md:ml-50">
      <div className="py-10 w-full md:ml-30 h-auto">
        <div className="max-w-[1070px] w-full m-auto px-6">
          <Selected />
          <Recommended />
          <Suggested/>
        </div>
      </div>
    </div>
    </Layout>
  );
};



export default ForYou;
