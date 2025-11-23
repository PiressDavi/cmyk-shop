import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-k/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center p-4 justify-between">
        <Link to="/" className="text-2xl font-bold text-c">Sempre Juntos JP</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-y">Produtos</Link>
          <Link to="/admin" className="hover:text-m">Admin</Link>
        </div>
      </div>
    </nav>
  );
}