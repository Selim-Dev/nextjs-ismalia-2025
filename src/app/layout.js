// import Navbar from './components/Navbar';
import './globals.css';
export const metadata = {
  //  title: 'Next 15 Demo',
  title: {
    default: "sleem default",
    template: "%s | Sleem Template"
  },

   description: 'main layout description' 
  };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-red-50 text-gray-900 flex flex-col">
        {/* <Navbar /> */}
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-red-600">🍽️ Next 15 Food App</h1>
            <p className="text-sm text-gray-500">Delicious recipes served fresh from the API</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow mx-auto w-full max-w-4xl p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t mt-8">
          <div className="max-w-4xl mx-auto px-4 py-3 text-center text-sm text-gray-500">
            © 2025 Foodie Academy · Built with 🍕 and ❤️
          </div>
        </footer>
      </body>
    </html>
  );
}
