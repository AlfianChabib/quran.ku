import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col py-2 items-center justify-center absolute bottom-0 w-full bg-gray-400 space-x-8">
      <h1 className="text-lg font-semibold">Quran.ku</h1>
      <div className="flex space-x-8 items-center">
        <p className="text-sm">
          Was made with ❤️ by{" "}
          <span className="font-semibold">alfian_chabib</span>
        </p>
        <span className="hidden sm:inline">|</span>
      </div>
      <div className="flex space-x-4 items-center">
        <p>Follow me on : </p>
        <Link to={"https://www.instagram.com/yannnisnobody/"} target="_blank">
          <AiFillInstagram size={20} />
        </Link>
        <Link to={"https://github.com/AlfianChabib"} target="_blank">
          <AiFillGithub size={20} />
        </Link>
      </div>
    </footer>
  );
}
