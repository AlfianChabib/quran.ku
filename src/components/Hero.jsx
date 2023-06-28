import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex md:flex-row min-h-screen w-full items-center max-w-[1400px] px-8 py-24 flex-col-reverse">
      <div className="flex-1">
        <h1 className="md:text-6xl text-4xl font-bold">Quran.ku</h1>
        <p className="md:my-6 my-3 text-gray-950 md:text-lg text-md flex flex-col">
          {`"`}
          Sesungguhnya orang-orang yang selalu membaca kitab Allah dan
          mendirikan shalat dan menafkahkan sebahagian dari rezeki yang Kami
          anugerahkan kepada mereka dengan diam-diam dan terang-terangan, mereka
          itu mengharapkan perniagaan yang tidak akan merugi.{`"`}
          <span>(QS. Fathir: 29)</span>
        </p>
        <Link
          to="/suratlist"
          className="inline-flex py-2 px-6 rounded-md border border-slate-950 bg-slate-950 hover:bg-slate-300 text-white hover:text-black transition-colors"
        >
          Baca Al-Quran
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center md:place-items-start mb-10">
        <img src="./quran-al-karim.svg" alt="quran" width={300} height={300} />
      </div>
    </div>
  );
}
