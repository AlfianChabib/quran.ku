/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";

export default function Search({
  data,
  setSearch,
  setFilteredList,
  filteredList,
}) {
  useEffect(() => {
    if (filteredList === "") {
      setSearch(data);
    } else if (filteredList.length >= 3) {
      setSearch(
        data.filter((item) =>
          item.namaLatin.toLowerCase().includes(filteredList.toLowerCase())
        )
      );
    }
  }, [data, filteredList, setSearch]);

  return (
    <div>
      <input
        type="search"
        placeholder="Cari Surat..."
        className="flex py-2 px-4 w-80 rounded-full focus:outline-none"
        onChange={(e) => {
          setFilteredList(e.target.value);
        }}
      />
    </div>
  );
}
