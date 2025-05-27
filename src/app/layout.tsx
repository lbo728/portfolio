export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans tracking-tight leading-snug">
        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
