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
      className={`relative shrink-0`}
      style={{
        zIndex: 10 - index,
      }}
      variants={{
        compact: {
          marginLeft: index > 0 ? "-38%" : 0,
          scale: index > 0 ? scale[index] : 1,
          transition: { duration: 0.5 },
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
        <motion.div
          layoutId={`image-${person.username}`}
          transition={{
            layout: {
              duration: 1,
            },
          }}
        >
          <Image
            src={person.image}
            className="aspect-[0.78] rounded-full object-cover"
            alt={index}
            width={isCompact ? 536 : 459}
            height={isCompact ? 681 : 583}
          />
        </motion.div>
      </Link>
      {!isCompact && (
        <motion.div
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 1 },
          }}
          className="space-y-1 mt-8"
        >
          <h3
            className={`${playfair.className} text-center text-[2.5rem] leading-[1.1] text-black`}
          >
            {person.name}
          </h3>
          <p
            className={`${playfair.className} text-center text-[1.25rem] leading-[1.1] text-[#848484]`}
          >
            {person.username}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
