import React from "react";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label"; 
import { Textarea } from "@/components/ui/textarea"; 

export const FormComponent = () => {
  return (
    <div className="w-full p-6 mt-8 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 shadow-md mb-4">
      {/* Title Field */}
      <Label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white">Title</Label>
      <Input
        type="text"
        id="title"
        placeholder="Enter the title"
        className="block mt-1 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-500"
      />

      {/* Description Field */}
      <Label htmlFor="description" className="mt-4 block text-sm font-medium text-gray-900 dark:text-white">Description</Label>
      <Textarea
        id="description"
        placeholder="Enter the description"
        className="block mt-1 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-500"
        rows={4}
      />
    </div>
  );
};