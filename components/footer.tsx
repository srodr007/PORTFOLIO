export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Sergio Rodriguez Valbuena. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Designed and developed with <span className="text-blue-500 dark:text-blue-400">❤</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
