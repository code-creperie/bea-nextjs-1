import Link from 'next/link';
import { books } from './books';
import Header from '../components/Header';

export const metadata = {
    title: 'Books - Book Exchange Application'
};

export default function BooksPage() {
    return (
        <>
            <Header subtitle="List of Books" />
            <div className="container mx-auto my-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="p-4 rounded-lg shadow-lg">
                        <div className="flex justify-center text-8xl mb-2">📔</div>
                        <div className="text-center">
                            <Link
                                href={`/books/${book.id}`}
                                className="block px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                            >
                                {book.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}