"use client";
import FileUpload from "@/components/Dashboard/FileUpload";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn button
import { FormComponent } from "@/components/Dashboard/FormComponent"; // Shadcn form component
import DashHeader from "@/components/Dashboard/DashHeader";
import {FaPlus} from 'react-icons/fa';

const Page = () => {
  const [forms, setForms] = useState([]); // Start with no forms

  // Function to add new form
  const addForm = () => {
    setForms([...forms, forms.length]); // Add new form by incrementing index
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashHeader />
      <div className="flex flex-col items-center justify-between min-h-screen md:flex-row lg:px-20 md:px-10 sm:px-6 px-4 py-10 space-y-6 lg:space-y-0 lg:space-x-6 gap-4">
        {/* Left side: File Upload */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-md sticky top-32">
          <FileUpload />
        </div>

        {/* Right side: Forms */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          {forms.map((formIndex) => (
            <FormComponent key={formIndex} />
          ))}

          {/* Plus button to add forms */}
          <Button onClick={addForm} className="self-center mt-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center space-x-2 px-4 py-2 rounded-md shadow-md transition-colors duration-200">
            <FaPlus className="text-lg" />
            <span> Add Form</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;