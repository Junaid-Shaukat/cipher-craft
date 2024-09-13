import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
export const metadata = {
  title: "ResumeAlign",
  description: "Align resume with job expectation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
