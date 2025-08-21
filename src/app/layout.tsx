// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Book Exchange Application'
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* NAVBAR */}
        <nav className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="text-2xl font-semibold dark:text-white">
                📚 Book Exchange Application
              </span>
            </Link>
            {/* Menu Items */}
            <div className="md:block w-auto">
              <ul className="flex flex-col md:flex-row md:space-x-8 font-medium mt-4 md:mt-0 p-4 md:p-0
                  border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white
                  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 rtl:space-x-reverse">
                <li> <Link href="/" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 dark:bg-green-600 md:dark:bg-transparent md:dark:text-green-500"> Home </Link> </li>
                <li> <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-green-500 md:dark:hover:bg-transparent"> About </Link> </li>
                <li> <Link href="/books" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-green-500 md:dark:hover:bg-transparent"> Books </Link> </li>
                <li> <Link href="/books/add" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-green-500 md:dark:hover:bg-transparent"> Add a book </Link> </li>
                <li> <Link href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-green-500 md:dark:hover:bg-transparent"> Login </Link> </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* MAIN CONTENT AREA */}
        <main className="">{children}</main>
        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-4 text-center">
          <small>&copy; {new Date().getFullYear()} Book Exchange Application. All rights reserved.</small>
        </footer>
      </body>
    </html>
  )
}