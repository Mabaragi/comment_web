export default function Header() {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="w-full flex items-center justify-between py-4 px-6">
        <a href="/" className="text-xl font-bold text-blue-500">
          로고
        </a>
        <nav>
          <a href="/about" className="text-gray-700 hover:text-blue-500 mx-4">
            소개
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 mx-4">
            연락처
          </a>
        </nav>
      </div>
    </header>
  );
}
