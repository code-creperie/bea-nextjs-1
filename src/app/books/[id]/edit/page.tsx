'use client';

import { FormEvent, useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { books } from '../../books';
import Header from '../../../components/Header';

export default function EditBookPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const book = books.find((b) => b.id === id);

  const [name, setName] = useState(book?.name ?? '');
  const [description, setDescription] = useState(book?.description ?? '');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (book) {
      setName(book.name);
      setDescription(book.description);
    }
  }, [book]);

  if (!book) {
    return notFound();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccessMessage(null);
    setError(null);

    if (!name.trim() || !description.trim()) {
      setError('Please fill in both the name and the description.');
      return;
    }

    // The update is only reflected locally at this point. Chapter 6 will
    // send the edited values to the server so that the change is stored
    // in the database.
    setSuccessMessage(`Changes to "${name}" are ready to be saved. Persistence will be implemented in the next chapter.`);
  }

  return (
    <>
      <Header subtitle={`Edit: ${book.name}`} />
      <div className="container mx-auto my-8 px-4">
        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 shadow-lg rounded-lg">
          {error && <p className="text-center text-red-600 py-4">{error}</p>}
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              {successMessage}
            </div>
          )}
          <h2 className="text-center text-xl font-semibold mb-4">Edit book</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                id="description"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-yellow-700 transition-colors"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
