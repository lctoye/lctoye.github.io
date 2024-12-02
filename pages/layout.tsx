import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="bg-nosferatu flex flex-col min-h-screen">
    <header className="bg-nosferatu-800 text-white p-4 text-purple">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="hover:underline">About Me</Link>
        <div className="space-x-4">
          <a href="/experience" className="hover:underline">Experience</a>
          <a href="/projects" className="hover:underline">Projects</a>
        </div>
      </nav>
    </header>
    <main className="flex-grow container mx-auto p-6">{children}</main>
    <footer className="bg-nosferatu-800 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Liam Toye</p>
    </footer>
  </div>
);

export default Layout;
