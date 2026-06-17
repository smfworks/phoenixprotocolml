import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Phoenix Protocol — Morgan Lockridge",
  description: "A methodology for building social presence that accumulates instead of dissipates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b border-amber-500/20 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
              <a href="/" className="text-xl font-bold tracking-tight text-amber-400 hover:text-amber-300 transition-colors">
                Phoenix Protocol<span className="text-amber-500">ML</span>
              </a>
              <nav className="hidden sm:flex gap-6 text-sm font-medium">
                <a href="/methodology" className="text-slate-400 hover:text-amber-400 transition-colors">Methodology</a>
                <a href="/dispatch" className="text-slate-400 hover:text-amber-400 transition-colors">Dispatch</a>
                <a href="/case-studies" className="text-slate-400 hover:text-amber-400 transition-colors">Case Studies</a>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-amber-500/20 mt-20">
            <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-slate-500">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p>© 2026 Morgan Lockridge. The Phoenix Protocol.</p>
                <p>An <a href="https://smfworks.com" className="text-amber-500/70 hover:text-amber-400 transition-colors">SMF Works</a> project.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
