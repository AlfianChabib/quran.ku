import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TafsirCards from "../components/TafsirCards";

export default function DetailTafsir() {
  const { nomor } = useParams();
  const [tafsir, setTafsir] = useState({});

  useEffect(() => {
    const getTafsirDetail = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/tafsir/${nomor}`
        );
        return response.data.data;
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return [];
      }
    };
    const fetchTafsir = async () => {
      const tafsirDetail = await getTafsirDetail();
      setTafsir(tafsirDetail);
    };
    fetchTafsir();
  }, [nomor]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gray-800 relative md:px-8 px-0">
      <Navbar />
      <div className="flex w-full min-h-screen flex-col items-center pt-20 md:pb-16 pb-28">
        <div className="flex text-white space-x-3 text-2xl">
          <h2 className="font-semibold">{tafsir.namaLatin}</h2>
          <span>-</span>
          <h2 className="arab">{tafsir.nama}</h2>
        </div>
        <div className="text-white text-sm font-light flex space-x-4">
          <p>Jumlah ayat : {tafsir.jumlahAyat}</p>
          <p>Tempat turun : {tafsir.tempatTurun}</p>
        </div>
        <div className="flex flex-wrap w-full md:justify-between justify-center">
          <div className="flex flex-wrap mt-8 md:px-12 px-4 gap-4 justify-center">
            <Link
              to={`/detailsurat/${tafsir.nomor}`}
              className="py-1 px-4 rounded-md border border-gray-300 bg-gray-300 hover:bg-slate-800 text-black hover:text-white transition-colors"
            >
              Surat
            </Link>
            {tafsir.tafsir?.map((tafsirs, nomor) => (
              <TafsirCards key={nomor} tafsirs={tafsirs} tafsir={tafsir} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
