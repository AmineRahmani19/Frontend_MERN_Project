export default function Footer() {
  return (
    <footer className="bg-indigo-100 text-center text-gray-700 py-6 mt-10 shadow-inner">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ma Bibliothèque. Tous droits réservés.
      </p>
    </footer>
  );
}
