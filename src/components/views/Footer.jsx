export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>© {new Date().getFullYear()} ReactAuthApp. All rights reserved.</p>
      <div className="flex justify-center mt-2 space-x-3">
        <a href="#" className="hover:text-blue-400">🌐</a>
        <a href="#" className="hover:text-blue-400">🐦</a>
        <a href="#" className="hover:text-blue-400">📘</a>
      </div>
    </footer>
  );
}
