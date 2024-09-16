import {
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-6 py-4">
      <div className="flex items-center gap-3">
        <Image src="/album.jpeg" height={50} width={50} alt="." />
        <div className="flex flex-col">
          <strong className="font-normal">Music Name</strong>
          <span className="text-xs text-zinc-400">Artist Music</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={24} className="text-zinc-200" />
          <SkipBack size={24} className="text-zinc-200" />
          <button className="flex size-10 items-center justify-center rounded-full bg-white pl-1 text-black">
            <FaPlay />
          </button>

          <SkipForward size={24} className="text-zinc-200" />
          <Repeat size={24} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:13</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={25} />
        <LayoutList size={25} />
        <Laptop2 size={25} />
        <div className="flex items-center justify-center gap-2">
          <Volume size={25} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={25} />
      </div>
    </footer>
  );
}
