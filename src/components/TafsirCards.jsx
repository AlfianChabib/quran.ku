/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
export default function TafsirCards({ tafsirs, tafsir }) {
  return (
    <div className="flex flex-wrap w-full relative bg-gray-300 p-4 rounded-lg space-y-2 text-black border-l-4 border-black">
      <p className="flex md:w-16 w-14 md:h-8 h-6  items-center justify-center bg-gray-700 md:text-base text-xs text-gray-300 rounded-md gap-1">
        {tafsir.nomor}
        <span>:</span>
        {tafsirs.ayat}
      </p>
      <p className="w-full text-md border-t-2 whitespace-pre-wrap pt-2 border-gray-600 text-justify">
        {tafsirs.teks}
      </p>
    </div>
  );
}
