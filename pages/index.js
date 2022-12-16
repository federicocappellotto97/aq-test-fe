import { Roboto, Playfair_Display } from "@next/font/google";
import Head from "next/head";
import Slider from "../components/home/slider";
import { useState } from "react";
import { motion } from "framer-motion";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [isCompact, setIsCompact] = useState(true);

  return (
    <>
      <Head>
        <title>aq-test-fe • Homepage</title>
      </Head>
      <main className={roboto.className}>
        <div className="overflow-hidden">
          <motion.div
            initial={false}
            animate={isCompact ? "compact" : "slider"}
            className="flex flex-col justify-center relative pt-[6rem]"
            style={{ minHeight: "calc(1080px - 105px)" }}
          >
            <motion.div
              className="w-[36.16%] pl-[7.75rem] space-y-8 absolute top-1/2 -translate-y-1/2"
              variants={{
                compact: {
                  left: 0,
                  opacity: 1,
                  transition: { duration: 1 },
                },
                slider: {
                  left: "-100%",
                  opacity: 1,
                  transition: { duration: 1 },
                },
              }}
            >
              <h1
                className={`${playfair.className} text-[6.25rem] leading-[1.1] text-black`}
              >
                The Abstract design
              </h1>
              <p className="text-[1.25rem] leading-[1.6] text-[#707070]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>
            <motion.div
              variants={{
                compact: {
                  right: 0,
                  width: "58.28%",
                  transition: { duration: 1 },
                },
                slider: {
                  width: "100%",
                  paddingLeft: "7.75rem",
                  transition: { duration: 1 },
                },
              }}
              className={`pr-[7.75rem] absolute top-0 bottom-0 flex flex-col justify-center`}
            >
              <div
                className={isCompact ? "" : "overflow-visible ml-[-7.75rem]"}
              >
                <Slider isCompact={isCompact} setIsCompact={setIsCompact} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
