'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [info, setInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setInfo(null);
    setError(null);

    if (!email.trim() || !password) {
      setError('Please enter both your email and password.');
      return;
    }

    // The credentials are not verified yet. Chapter 6 will send them to the
    // server, check them against the database, and create a session before
    // redirecting the user back to the home page.
    setInfo('Credentials received. Authentication will be wired up in the next chapter.');
  }

  return (
    <>
      <Header subtitle="Log in to your account" />
      <div className="container mx-auto my-8 px-4">
        <div className="max-w-md mx-auto bg-white p-6 sm:p-8 shadow-lg rounded-lg">
          {error && <p className="text-center text-red-600 py-4">{error}</p>}
          {info && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              {info}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-yellow-700 transition-colors"
            >
              Log in
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-yellow-700 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}