import FileUpload from "@/components/Dashboard/FileUpload";
import React from "react";

const Page = () => {
  return (
    <div className="lg:px-20 md:px-10 sm:px-6 px-4  flex items-center justify-between min-h-screen">
        <div className="w-full md:w-1/2">
      <FileUpload />
        </div>
    </div>
  );
};

export default Page;
