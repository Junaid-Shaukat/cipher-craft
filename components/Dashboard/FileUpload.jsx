"use client";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Bytescale
});

// Configuration options
const options = { multi: true };

const FileUpload = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <UploadButton uploader={uploader} options={options}>
        {({ onClick }) => (
          <button
            onClick={onClick}
            className="flex items-center justify-center w-full h-[300px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 border-dashed rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <svg
                className="w-10 h-10 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG, or GIF (MAX. 800x400px)
              </p>
            </div>
          </button>
        )}
      </UploadButton>
    </div>
  );
};

export default FileUpload;