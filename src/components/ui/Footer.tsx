export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Fadil Nurmaulid. All rights reserved.
      </div>
    </footer>
  )
}