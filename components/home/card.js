import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "@next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Card({ person, index, isCompact }) {
  const scale = [, 0.85, 0.72, 0.59, 0.5];

  return (
    <motion.div
      layout
      className={`shrink-0 relative snap-center`}
      style={{
        zIndex: 25 - index,
      }}
      variants={{
        compact: {
          marginLeft: index > 0 ? "-38%" : 0,
          scale: index > 0 ? scale[index] : 1,
          transition: { duration: 0.5, delay: 0.2 },
        },
        slider: {
          marginLeft: "0",
          scale: 1,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Link
        href={`/${person.username}`}
        className={isCompact ? "pointer-events-none" : ""}
      >
        <motion.div layoutId={`image-${person.username}`}>
          <Image
            src={person.image}
            className={`rounded-full aspect-[0.78] object-cover ${
              isCompact ? "" : ""
            }`}
            alt={index}
            width={536}
            height={681}
          />
        </motion.div>
      </Link>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        variants={{
          compact: {
            y: 300,
            opacity: 0,
            visibility: "hidden",
            transition: { duration: 0.5 },
          },
          slider: {
            y: 0,
            opacity: 1,
            visibility: "visible",
            transition: { duration: 0.5, delay: 0.5 },
          },
        }}
        className="space-y-1 absolute top-full pt-8 inset-x-0"
      >
        <h3
          className={`${playfair.className} text-[2.5rem] leading-[1.1] text-black text-center`}
        >
          {person.name}
        </h3>
        <p
          className={`${playfair.className} text-[1.25rem] leading-[1.1] text-[#848484] text-center`}
        >
          {person.username}
        </p>
      </motion.div>
    </motion.div>
  );
}
