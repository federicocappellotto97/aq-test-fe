import Card from "./card";
import Switch from "./switch";
import { motion } from "framer-motion";

export default function Slider({ people, isCompact, setIsCompact }) {
  const peopleChunk = isCompact ? people.slice(0, 5) : people;
  return (
    <div
      className={
        isCompact
          ? ""
          : "absolute inset-0 top-1/2 flex h-full -translate-y-1/2 flex-col justify-center px-[7.75rem]"
      }
    >
      <motion.div
        className={`flex ${
          isCompact ? "" : "scrollbar-hide gap-10 mx-[-7.5rem] px-[7.5rem]"
        }`}
        variants={{
          slider: {
            overflow: "scroll",
            transition: { delay: 0.5 },
          },
        }}
      >
        {peopleChunk.map((e, i) => (
          <Card person={e} index={i} key={i} isCompact={isCompact} />
        ))}
      </motion.div>
      <Switch isCompact={isCompact} setIsCompact={setIsCompact} />
    </div>
  );
}
