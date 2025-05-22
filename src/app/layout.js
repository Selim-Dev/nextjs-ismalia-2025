
export const metadata = { title: 'Next 15 Demo' };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-red-50 text-gray-900">
        <main className="mx-auto max-w-4xl p-6">{children}</main>
      </body>
    </html>
  );
}
