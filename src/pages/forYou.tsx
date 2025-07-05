import Layout from "@/components/Layout";
import Recommened from "@/components/Recommened";
import Selected from "@/components/Selected";
import Suggested from "@/components/Suggested";
import React from "react";


const forYou = () => {
  
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center">
      <div className="py-10 w-full md:ml-50 h-auto">
        <div className="max-w-[1070px] w-full m-auto px-6">
          <Selected />
          <Recommened />
          <Suggested/>
        </div>
      </div>
    </div>
    </Layout>
  );
};



export default forYou;
