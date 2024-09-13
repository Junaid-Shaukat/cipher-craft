import Link from "next/link";
import React from "react";

const DashHeader = () => {
  return (
    <div>
      <nav className="px-10 py-4 shadow fixed top-0 w-full bg-white">
        <Link className="flex items-center" href="/">
          <span className="sr-only">Resume Align</span>
          <svg
            className="h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
            <path d="M8 15h6" />
          </svg>
          <span className="ml-2 text-xl font-bold">Resume Align</span>
        </Link>
      </nav>
    </div>
  );
};

export default DashHeader;
