export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Connexion</h2>
        <form>
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded" />
          <input type="password" placeholder="Mot de passe" className="w-full p-3 mb-4 border border-gray-300 rounded" />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
