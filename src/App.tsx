import { Twitter, Linkedin, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white px-6 py-8 sm:px-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-12 border-b border-gray-200 pb-6">
          <div className="mb-6 flex items-center gap-6">
            <img
              src="/1746071057401.jpeg"
              alt="Profile"
              className="h-32 w-32 rounded-lg object-cover"
            />
            <div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Mingxuan Zhang
              </h1>
              <nav className="flex flex-wrap items-center gap-2 text-sm">
                <a
                  href="https://x.com/mingZedh"
                  className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mingxuan-zhang-050918189/"
                  className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/mingkz"
                  className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="/cv.pdf"
                  className="rounded-md border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
                <a
                  href="https://scholar.google.com/citations?user=soVw45IAAAAJ&hl=en"
                  className="rounded-md border border-gray-300 bg-white px-3 py-1.5 transition-colors hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
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
        </section>

        {/* Publications Section */}
        <section className="mb-12">
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

        {/* Selected Talks Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Selected Talks</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Talk Title 1]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Conference/Institution Name], [Location] ([Month] [Year])
              </div>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Talk Title 2]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Conference/Institution Name], [Location] ([Month] [Year])
              </div>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                [Talk Title 3]
              </a>
              <div className="mt-1 text-sm text-gray-600">
                [Conference/Institution Name], [Location] ([Month] [Year])
              </div>
            </li>
            <li>
              <div className="text-base text-gray-800">
                [Talk Title 4]
              </div>
              <div className="mt-1 text-sm text-gray-600">
                [Conference/Institution Name], [Location] ([Month] [Year])
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
