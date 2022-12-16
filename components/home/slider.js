import Card from "./card";
import Image from "next/image";
import { motion } from "framer-motion";
import { people } from "../../lib/people";
import { useMemo } from "react";

export default function Slider({ isCompact, setIsCompact }) {
  const peopleChunk = useMemo(
    () => (isCompact ? people.slice(0, 5) : people),
    [isCompact]
  );

  return (
    <>
      <div
        className={`relative min-h-[681px] flex ${
          isCompact
            ? ""
            : "overflow-scroll snap-x snap-proximity gap-10 pb-[6.37rem] px-[7.75rem] w-screen scrollbar-hide"
        }`}
      >
        {peopleChunk.map((e, i) => (
          <Card person={e} index={i} key={i} isCompact={isCompact} />
        ))}
      </div>
      <div className="flex justify-end mt-16">
        <div className="bg-[#4B4B4B] rounded-[20px] p-2.5 shadow-[0_0_10px_rgba(0,0,0,0.16)] flex divide-x divide-[#707070]">
          <button
            onClick={() => setIsCompact(true)}
            className={`p-3 transition-opacity duration-300 ${
              !isCompact ? "opacity-40 hover:opacity-75" : ""
            }`}
          >
            <Image src="/compact.svg" width={62} height={52} alt="compact" />
          </button>
          <button
            onClick={() => setIsCompact(false)}
            className={`p-3 transition-opacity duration-300 ${
              isCompact ? "opacity-40 hover:opacity-75" : ""
            }`}
          >
            <Image src="/slider.svg" width={56} height={52} alt="slider" />
          </button>
        </div>
      </div>
    </>
  );
}
