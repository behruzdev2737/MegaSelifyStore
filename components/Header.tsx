import Image from "next/image";
import Link from "next/link";
import ProfilPhoto from "@/app/assets/ProfilPhoto.png";

const Header = () => {
  return (
    <header className="bg-white drop-shadow-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-1 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold md:text-2xl">
          <div className="flex">
            <div className="px-3 text-black">
              <h1>Mega</h1>
              <h1>Celify</h1>
            </div>
            <span className="px-5 py-4 bg-yellow-400 rounded-r-xl text-white rounded-tl-2xl">STORE</span>
          </div>
        </Link>
        <nav className="flex gap-6 text-gray-600">
          <Link href="/profile">
            <Image
              src={ProfilPhoto}
              width={40}
              height={40}
              alt="profilPhoto"
              className="rounded-[50]"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
