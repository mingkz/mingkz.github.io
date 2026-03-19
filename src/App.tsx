import { Twitter, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-8 sm:px-12 md:px-16 lg:px-24">
      {/* Sticky Navigation Bar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white transition-all duration-300 ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3 sm:px-12 md:px-16 lg:px-24">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-gray-600"
          >
            Mingxuan Zhang
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a
              href="#"
              className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#publications"
              className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
            >
              Publications
            </a>
            <a
              href="#teaching"
              className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
            >
              Teaching
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-12 border-b border-gray-200 pb-6">
          <div className="mb-6 flex items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/1746071057401.jpeg"
                alt="Profile"
                className="h-32 w-32 rounded-lg object-cover"
              />
              <nav className="flex items-center gap-1.5">
                <a
                  href="https://x.com/mingZedh"
                  className="rounded-md border border-transparent bg-transparent p-1.5 transition-all hover:border-gray-200 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mingxuan-zhang-050918189/"
                  className="rounded-md border border-transparent bg-transparent p-1.5 transition-all hover:border-gray-200 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://github.com/mingkz"
                  className="rounded-md border border-transparent bg-transparent p-1.5 transition-all hover:border-gray-200 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={14} />
                </a>
              </nav>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Mingxuan Zhang
              </h1>
              <nav className="flex flex-wrap items-center gap-2 text-sm">
                <a
                  href="#publications"
                  className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
                >
                  Publications
                </a>
                <a
                  href="#teaching"
                  className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
                >
                  Teaching
                </a>
                <a
                  href="https://scholar.google.com/citations?user=soVw45IAAAAJ&hl=en"
                  className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
                <a
                  href="/cv.pdf"
                  className="rounded-md border border-transparent bg-transparent px-3 py-1.5 font-bold transition-all hover:border-gray-200 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
              </nav>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <p className="text-base leading-relaxed text-gray-800">
              [Brief bio about yourself. Describe your current position, research interests, or professional focus.
              For example: "I'm a PhD student at [University] studying [Field], researching [Topic].
              My work focuses on [Area] with applications to [Application]."]
            </p>
            <p className="mt-4 text-base text-gray-700">
              Feel free to contact me at{" "}
              <code className="font-mono rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-800">
                mz2934@cumc.columbia.edu
              </code>
              .
            </p>
          </div>
        </header>

        {/* Publications Section */}
        <section id="publications" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Publications</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Paper Title 1]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Author 1], [Author 2], et al. <span className="italic">[Journal/Conference Name]</span> (2025)
              </div>
              <div className="mt-1 text-xs text-gray-500">
                [Optional: Awards, recognitions, or notes]
              </div>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Paper Title 2]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Author 1], [Author 2], et al. <span className="italic">[Journal/Conference Name]</span> (2024)
              </div>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Paper Title 3]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Author 1], [Author 2], et al. <span className="italic">[Journal/Conference Name]</span> (2024)
              </div>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Paper Title 4]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Author 1], [Author 2], et al. <span className="italic">[Journal/Conference Name]</span> (2023)
              </div>
            </li>
          </ul>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Teaching</h2>
          <ul className="space-y-4">
            <li>
              <div className="text-base font-semibold text-gray-800">
                [Course Name/Number]
              </div>
              <div className="mt-1 text-sm text-gray-600">
                [Role: Teaching Assistant/Instructor] - [University/Institution] ([Semester] [Year])
              </div>
              <div className="mt-1 text-sm text-gray-600">
                [Optional: Brief description of responsibilities or topics covered]
              </div>
            </li>
            <li>
              <div className="text-base font-semibold text-gray-800">
                [Course Name/Number]
              </div>
              <div className="mt-1 text-sm text-gray-600">
                [Role: Teaching Assistant/Instructor] - [University/Institution] ([Semester] [Year])
              </div>
            </li>
            <li>
              <div className="text-base font-semibold text-gray-800">
                [Course Name/Number]
              </div>
              <div className="mt-1 text-sm text-gray-600">
                [Role: Teaching Assistant/Instructor] - [University/Institution] ([Semester] [Year])
              </div>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mingxuan Zhang. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
