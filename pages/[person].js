import { Roboto, Playfair_Display } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { people } from "../lib/people";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Person({ person }) {
  return (
    <>
      <Head>
        <title>{`aq-test-fe • ${person.name}`}</title>
      </Head>
      <main className={roboto.className}>
        <div
          className="overflow-hidden pl-[7.75rem]"
          style={{ height: "calc(1080px - 105px)" }}
        >
          <div className="flex gap-[10.5rem] pt-[10.5rem]">
            <motion.div
              className="w-2/5 shrink-0"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
            >
              <h1
                className={`${playfair.className} mb-8 text-[6.25rem] leading-[1.1] text-black`}
              >
                {person.name}
              </h1>
              <p
                className={`${playfair.className} mb-14 text-[1.25rem] leading-[1.1] text-[#848484]`}
              >
                {person.username}
              </p>
              <p className="text-[1.25rem] leading-[1.6] text-[#707070]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link
                href="/"
                className="group mt-20 inline-flex items-center gap-2 text-[1.25rem] uppercase text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                <span>Back</span>
              </Link>
            </motion.div>
            <div className="flex-1">
              <motion.figure
                animate={{
                  width: 1088,
                  height: 1377,
                }}
                transition={{
                  layout: {
                    duration: 1,
                  },
                }}
                initial={false}
                layoutId={`image-${person.username}`}
              >
                <Image
                  src={person.image}
                  className={`aspect-[0.78] rounded-full object-cover`}
                  alt={person.name}
                  width={1088}
                  height={1377}
                  loading="eager"
                  priority={true}
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: people.map((e) => {
      return {
        params: {
          person: e.username,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const person = people.find((e) => e.username == params.person);

  if (!person) {
    return {
      notFound: true,
    };
  }

  return {
    props: { person },
  };
}
