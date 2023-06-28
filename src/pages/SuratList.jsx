import getSuratData from "../service/getSurat";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Search from "../components/Search";

export default function SuratList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredList, setFilteredList] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const suratData = await getSuratData();
      setData(suratData);
      setSearch(suratData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center bg-gray-800 relative md:px-8 px-0">
        <Navbar />
        <div className="flex w-full min-h-screen flex-col items-center pt-20 pb-24">
          <Search
            data={data}
            setSearch={setSearch}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
          />
          <div className="flex flex-wrap w-full md:justify-between justify-center">
            <div className="flex w-full flex-wrap mt-8 px-12 gap-4">
              {search.map((surat) => (
                <Card key={surat.nomor} data={surat} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
