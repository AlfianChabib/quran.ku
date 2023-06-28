/* eslint-disable react/prop-types */
export default function AyatCards(props) {
  const { ayahs, ayah } = props;

  return (
    <>
      <div className="flex flex-wrap w-full relative bg-gray-300 p-4 rounded-lg space-y-6 text-black border-l-4 border-black">
        <p className="flex md:w-16 w-14 md:h-8 h-6  items-center justify-center bg-gray-700 md:text-base text-xs text-gray-300 rounded-md gap-1">
          {ayah.nomor}
          <span>:</span>
          {ayahs.nomorAyat}
        </p>
        <p className="text-right arab w-full md:text-3xl text-2xl leading-loose">
          {ayahs.teksArab}
        </p>
        <p className="w-full md:text-sm text-sm border-t-2 border-gray-600">
          {ayahs.teksIndonesia}
        </p>
      </div>
    </>
  );
}
