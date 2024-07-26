import React from 'react';
import { Link } from 'react-router-dom';

export default function NewErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist. You can always go back to the homepage.</p>
        <Link to="/" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Go Home
        </Link>
      </div>
    </div>
  );
}
