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
        <title>aq-test-fe • {person.name}</title>
      </Head>
      <main className={roboto.className}>
        <div
          className="pl-[7.75rem] overflow-hidden"
          style={{ height: "calc(1080px - 105px)" }}
        >
          <div className="pt-[10.5rem] flex gap-[10.5rem]">
            <motion.div
              className="w-2/5 shrink-0"
              initial={{ opacity: 0, x: -300 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
            >
              <h1
                className={`${playfair.className} text-[6.25rem] leading-[1.1] text-black mb-8`}
              >
                {person.name}
              </h1>
              <p
                className={`${playfair.className} text-[1.25rem] leading-[1.1] text-[#848484] mb-14`}
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
                className="mt-20 group inline-flex items-center gap-2 text-black uppercase text-[1.25rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300 ease-in-out"
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
              <motion.div
                initial={false}
                animate={{
                  width: 1088,
                  height: 1377,
                  transition: { duration: 1 },
                }}
                layoutId={`image-${person.username}`}
              >
                <Image
                  src={person.image}
                  className={`rounded-full aspect-[0.78] object-cover w-full`}
                  alt={person.name}
                  width={536}
                  height={681}
                />
              </motion.div>
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
