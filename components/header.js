import Image from "next/image";
import { Playfair_Display } from "@next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="py-[2.13rem] border-b border-[#707070]">
      <div className="px-[7.75rem] flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="AQ" width={65} height={37} />
        </Link>
        <p className={`${playfair.className} text-[1.25rem]`}>Test fe</p>
      </div>
    </div>
  );
}
