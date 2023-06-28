import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header
        className={`flex w-full justify-center px-8 py-3 bg-zinc-950 text-white top-0 z-50 ${
          window.scrollY > 10 ? "sticky" : "absolute"
        }`}
      >
        <nav className="flex w-full max-w-[1400px] items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-semibold">
              Quran.ku
            </Link>
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/suratlist">Baca</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
