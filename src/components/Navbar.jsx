import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Ma Bibliothèque</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Accueil</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/register" className="hover:underline">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}
