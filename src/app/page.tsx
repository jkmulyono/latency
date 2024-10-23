import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("@/components/map/latency"), { ssr: false });

export default function HomePage() {
  return (
    <div className="bg-[rgb(212,218,220)] py-10 sm:py-3">
      <div className="m-4 grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-9 gap-4 h-[50rem]">
        <div className="relative sm:col-span-9 sm:row-span-5 min-h-[100px] rounded-lg overflow-hidden">
          <Map center={[-6.155158139563846, 105.50465998162689]} zoom={7} />
        </div>
        <div id="cetak" className="sm:col-span-3 sm:row-span-1 h-[5rem] rounded-lg relative">
          <Image
            src="/cetak.png"
            alt="Cetak Image"
            // layout="fill"
            objectFit="cover"
            className="rounded-lg absolute bottom-0 right-0"
            width={100} 
            height={50} 
          />
        </div>

        <div
          id="aktif"
          className="sm:col-span-3 sm:row-span-1 h-[5rem] rounded-lg bg-[#d9fce4] opacity-70"
        ></div>
        <div
          id="mati"
          className="sm:col-span-3 sm:row-span-1 h-[5rem] rounded-lg bg-[#feeeee] opacity-70"
        ></div>
        <div
          id="popup"
          className="sm:col-span-3 sm:row-span-3 min-h-[100px] rounded-lg bg-white opacity-90"
        ></div>
        <div
          id="acc"
          className="sm:col-span-3 sm:row-span-2 min-h-[100px] rounded-lg bg-white opacity-90"
        ></div>
        <div
          id="tabel"
          className="sm:col-span-6 sm:row-span-4 min-h-[100px] rounded-lg bg-white opacity-90"
        ></div>
        <div
          id="status"
          className="sm:col-span-3 sm:row-span-3 min-h-[100px] rounded-lg bg-white opacity-90"
        ></div>
        <div
          id="int"
          className="sm:col-span-3 sm:row-span-2 min-h-[100px] rounded-lg bg-white opacity-90"
        ></div>
      </div>
    </div>
  );
}
