import "./globals.css";
import {NextUIProvider} from '@nextui-org/react'
export const metadata = {
  title: "ResumeAlign",
  description: "Align resume with job expectation",
};



export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
    </NextUIProvider>
  );
}
