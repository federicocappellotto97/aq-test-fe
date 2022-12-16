import Image from "next/image";

export default function Switch({ isCompact, setIsCompact }) {
  return (
    <div className="mt-16 flex justify-end">
      <div className="flex divide-x divide-[#707070] rounded-[20px] bg-[#4B4B4B] p-2.5 shadow-[0_0_10px_rgba(0,0,0,0.16)]">
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
  );
}
