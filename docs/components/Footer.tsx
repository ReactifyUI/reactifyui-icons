const LOGO = process.env.NEXT_PUBLIC_LOGO_URL ?? ""

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {LOGO && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={LOGO} alt="ReactifyUI Icons" width={26} height={37} className="object-contain" />
            )}
            <div>
              <div className="text-white font-semibold text-sm">ReactifyUI Icons</div>
              <div className="text-xs text-gray-500">v1.0.0 · MIT License</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="https://github.com/ReactifyUI/reactifyui-icons" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/reactifyui-icons" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              npm
            </a>
            <a href="https://github.com/ReactifyUI/reactifyui-icons/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Issues
            </a>
          </div>

          {/* Credit */}
          <p className="text-xs text-gray-500 text-center md:text-right">
            Made with ❤️ by{" "}
            <a
              href="https://www.instagram.com/kanchansharma1408/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              Kanchan Sharma &amp; Team
            </a>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} ReactifyUI Icons. Free forever. MIT Licensed.
        </div>
      </div>
    </footer>
  )
}
