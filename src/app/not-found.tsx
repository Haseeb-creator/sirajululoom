import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Page Not Found</p>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </Link>
          <p className="text-gray-500">
            <Link href="/about" className="text-blue-400 hover:underline">About</Link>
            {' '} • {' '}
            <Link href="/programs" className="text-blue-400 hover:underline">Programs</Link>
            {' '} • {' '}
            <Link href="/contact" className="text-blue-400 hover:underline">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
