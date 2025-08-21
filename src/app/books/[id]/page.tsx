import { notFound } from 'next/navigation';
import Link from 'next/link';
import { books } from '../books';
import Header from '../../components/Header';

interface BookDetailPageProps {
    params: {
        id: string;
    };
}

export default function BookDetailPage({ params }: BookDetailPageProps) {
    const book = books.find((b) => b.id === params.id);

    if (!book) {
        return notFound();
    }

    const subtitle = `${book.name} - Book Information`;

    return (
        <>
            <Header subtitle={subtitle} />
            <div className="flex flex-col md:flex-row bg-white m-4 shadow-md rounded-lg overflow-hidden">
                <div className="md:w-1/3 flex justify-center items-center text-8xl mb-2 p-4">📔</div>
                <div className="md:w-2/3 p-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{book.name}</h2>
                    <p className="text-gray-600 mb-4">{book.description}</p>
                    <Link
                        href={`/books/${book.id}/edit`}
                        className="inline-block px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    >
                        Edit this book
                    </Link>
                </div>
            </div>
        </>
    );
}