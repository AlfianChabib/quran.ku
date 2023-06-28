/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function BeforeAfter({ ayah }) {
  return (
    <div className="flex flex-row gap-2 pt-4">
      <Link
        to={`/detailsurat/${ayah.suratSebelumnya?.nomor}`}
        className="flex items-center bg-gray-300 py-1 px-3 rounded-md"
      >
        <MdKeyboardArrowLeft />
        {ayah.suratSebelumnya?.namaLatin}
      </Link>
      <Link
        to={`/detailsurat/${ayah.suratSelanjutnya?.nomor}`}
        className="flex items-center bg-gray-300 py-1 px-3 rounded-md"
      >
        {ayah.suratSelanjutnya?.namaLatin}
        <MdKeyboardArrowRight />
      </Link>
    </div>
  );
}
