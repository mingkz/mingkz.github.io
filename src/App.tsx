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
                  href="/ming_cv.pdf"
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
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              I am a final year PhD student in Computational Biology at Columbia University, advised by Prof. Andrea Califano and Prof. Elham Azizi. My research interests focus on developing principled and theoretically grounded methods in machine learning, with particular emphasis on generative modeling, geometric deep learning, and causal discovery and inference. I am interested in advancing the theoretical foundations of these methods and building tools that can deepen our understanding of complex systems.
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              Previously, I completed my M.Sc. in Computational Biology at Cornell University, Weill Graduate School of Medical Science, where I was advised by Prof. Nikolaus Schultz.
            </p>
            <p className="mt-4 text-base text-gray-700">
              Feel free to contact me at{" "}
              <code className="font-mono rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-800">
                mz2934@columbia.edu
              </code>
              .
            </p>
          </div>
        </header>

        {/* Publications Section */}
        <section id="publications" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Publications</h2>
          <p className="mb-4 text-sm italic text-gray-600">
            Selected publications. For a complete list, please visit my{" "}
            <a
              href="https://scholar.google.com/citations?user=soVw45IAAAAJ&hl=en"
              className="no-underline transition-all hover:underline"
              style={{color: '#2D7A7A'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar profile
            </a>.
          </p>
          <ul className="space-y-4">
            <li>
              <a href="https://doi.org/10.1101/2024.12.15.628568" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                Echidna: A Bayesian Framework for Quantifying Gene Dosage Effect Impacting Phenotypic Plasticity
              </a>
              <div className="mt-1 text-sm text-gray-600">
                Fan, Joy Linyue*, <span className="font-semibold">Mingxuan Zhang*</span>, William O'Brien, Joshua D. Myers, Johannes C. Melms, Jana Biermann, Edridge D'Souza, et al. <span className="italic">In Revision, Nature Methods</span> (2024)
              </div>
            </li>
            <li>
              <a href="https://doi.org/10.48550/ARXIV.2603.03411" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                Scalable Contrastive Causal Discovery under Unknown Soft Interventions
              </a>
              <div className="mt-1 text-sm text-gray-600">
                <span className="font-semibold">Mingxuan Zhang*</span>, Khushi Desai*, Sopho Kevlishvili, and Elham Azizi. <span className="italic">In Review, UAI 2026</span> (2026)
              </div>
            </li>
            <li>
              <a href="https://doi.org/10.48550/ARXIV.2603.16708" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                Learning Lineage-Guided Geodesics with Finsler Geometry
              </a>
              <div className="mt-1 text-sm text-gray-600">
                Zweig, Aaron*, <span className="font-semibold">Mingxuan Zhang*</span>, David A. Knowles, and Elham Azizi. <span className="italic">In Review, UAI 2026</span> (2026)
              </div>
            </li>
            <li>
              <a href="https://www.biorxiv.org/content/10.1101/2025.07.03.663009v3" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                GREmLN: A Cellular Graph Structure Aware Transcriptomics Foundation Model
              </a>
              <div className="mt-1 text-sm text-gray-600">
                <span className="font-semibold">Mingxuan Zhang*</span>, Vinay Swamy*, Rowan Cassius, Léo Dupire, et al. <span className="italic">ICLR 2026, MLGenX</span> (2025)
              </div>
            </li>
            <li>
              <a href="http://arxiv.org/abs/2509.25230" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                Energy Guided Geometric Flow Matching
              </a>
              <div className="mt-1 text-sm text-gray-600">
                Zweig, Aaron*, <span className="font-semibold">Mingxuan Zhang*</span>, Elham Azizi, and David Knowles. <span className="italic">arXiv</span> (2025)
              </div>
            </li>
            <li>
              <a href="https://doi.org/10.1136/jitc-2023-006782" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                KLRG1 Marks Tumor-Infiltrating CD4 T Cell Subsets Associated with Tumor Progression and Immunotherapy Response
              </a>
              <div className="mt-1 text-sm text-gray-600">
                Ager, Casey R., <span className="font-semibold">Mingxuan Zhang</span>, Matthew Chaimowitz, Shruti Bansal, Somnath Tagore, Aleksandar Obradovic, Collin Jugler, et al. <span className="italic">Journal for Immunotherapy of Cancer</span> 11 (9) (2023)
              </div>
            </li>
            <li>
              <a href="https://icml-compbio.github.io/2023/papers/WCBICML2023_paper94.pdf" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                GGeraPHF: Graph Generative Poisson Hierarchical Factorization
              </a>
              <div className="mt-1 text-sm text-gray-600">
                <span className="font-semibold">Mingxuan Zhang*</span>, Kevin Hoffer-Hawlik*, Benjamin Izar, and Elham Azizi. <span className="italic">ICML 2023, Workshop in Computational Biology</span> (2023)
              </div>
            </li>
            <li>
              <a href="https://www.nature.com/articles/s41591-024-03040-4" className="no-underline transition-all hover:underline" style={{color: '#2D7A7A'}} target="_blank" rel="noopener noreferrer">
                Ultrasensitive Plasma-Based Monitoring of Tumor Burden Using Machine-Learning-Guided Signal Enrichment
              </a>
              <div className="mt-1 text-sm text-gray-600">
                Widman, Adam J., Minita Shah, Amanda Frydendahl, Daniel Halmos, Cole C. Khamnei, Nadia Øgaard, Srinivas Rajagopalan, Anushri Arora, Aditya Deshpande, William F. Hooper, Jean Quentin, Jake Bass, <span className="font-semibold">Mingxuan Zhang</span>, et al. <span className="italic">Nature Medicine</span> 30 (6): 1655–66 (2024)
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
                Intensive Workshop on Methods in Single-Cell Data Integration and Optimal Transport
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Instructor - Columbia University (2025)
              </div>
            </li>
            <li>
              <div className="text-base font-semibold text-gray-800">
                Single-Cell Analysis Bootcamp: Systems Biology Methods for Analysis of Single-Cell RNA-seq
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Instructor - Columbia University Medical Center (2024)
              </div>
            </li>
            <li>
              <div className="text-base font-semibold text-gray-800">
                Statistical Machine Learning for Genomics
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Teaching Assistant - Columbia University (2024)
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
