import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AyatCards from "../components/AyatCards";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
("react-icons/md");
import BeforeAfter from "../components/BeforeAfter";

export default function DetailSurat() {
  const { nomor } = useParams();
  const [ayah, setAyah] = useState({});

  useEffect(() => {
    const getSuratDetail = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/surat/${nomor}`
        );
        return response.data.data;
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return [];
      }
    };

    const fetchDetail = async () => {
      const suratDetail = await getSuratDetail();
      setAyah(suratDetail);
    };

    fetchDetail();
  }, [nomor]);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center bg-gray-800 relative md:px-8 px-0">
        <Navbar />
        <div className="flex w-full min-h-screen flex-col items-center pt-20 md:pb-16 pb-28">
          <div className="flex text-white space-x-3 text-2xl">
            <h2 className="font-semibold">{ayah.namaLatin}</h2>
            <span>-</span>
            <h2 className="arab">{ayah.nama}</h2>
          </div>
          <div className="text-white text-sm font-light flex space-x-4">
            <p>Jumlah ayat : {ayah.jumlahAyat}</p>
            <p>Tempat turun : {ayah.tempatTurun}</p>
          </div>
          <div className="flex flex-wrap w-full md:justify-between justify-center">
            <div className="flex flex-wrap mt-8 md:px-12 px-4 gap-4 justify-center">
              <Link
                to={`/detailsurat/tafsir/${ayah.nomor}`}
                className=" py-1 px-4 rounded-md border border-gray-300 bg-gray-300 hover:bg-slate-800 text-black hover:text-white transition-colors"
              >
                Tafsir
              </Link>
              {ayah.ayat?.map((ayahs, index) => (
                <AyatCards key={index} ayahs={ayahs} ayah={ayah} />
              ))}
            </div>
          </div>
          <BeforeAfter ayah={ayah} />
        </div>
        <Footer />
      </div>
    </>
  );
}
