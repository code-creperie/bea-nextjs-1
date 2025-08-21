'use client';

import { FormEvent, useState } from 'react';
import Header from '../../components/Header';

export default function AddBookPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccessMessage(null);
    setError(null);

    if (!name.trim() || !description.trim()) {
      setError('Please fill in both the name and the description.');
      return;
    }

    // At this point the form data is valid. In Chapter 6 we will send it
    // to an API route so it is persisted to the database. For now, we
    // simply acknowledge the submission and reset the form.
    setSuccessMessage(`"${name}" is ready to be added. Persistence will be implemented in the next chapter.`);
    setName('');
    setDescription('');
  }

  return (
    <>
      <Header subtitle="Add a Book" />
      <div className="container mx-auto my-8 px-4">
        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 shadow-lg rounded-lg">
          {error && <p className="text-center text-red-600 py-4">{error}</p>}
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              {successMessage}
            </div>
          )}
          <h2 className="text-center text-xl font-semibold mb-4">Add book</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter name"
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
                placeholder="Enter description"
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
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}