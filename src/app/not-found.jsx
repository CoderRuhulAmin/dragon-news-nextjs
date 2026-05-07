import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            // onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        {/* Decorative element */}
        <div className="mt-10 text-sm text-gray-400">
          If you think this is a mistake, contact support.
        </div>
      </div>
    </div>
    );
};

export default NotFoundPage;