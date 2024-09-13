import "./globals.css";
<<<<<<< HEAD
import {
  ClerkProvider
} from '@clerk/nextjs'
=======
>>>>>>> b281f4a7c8c229e01396b12c5057a88e090e1343
export const metadata = {
  title: "ResumeAlign",
  description: "Align resume with job expectation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
<<<<<<< HEAD
      <body>
        {children}
      </body>
=======
      <body className={`antialiased`}>{children}</body>
>>>>>>> b281f4a7c8c229e01396b12c5057a88e090e1343
    </html>
  </ClerkProvider>
  );
}
