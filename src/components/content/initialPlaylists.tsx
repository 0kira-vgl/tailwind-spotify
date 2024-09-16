import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export function InitialPlaylists() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-semibold">Good Morning</h1>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <a
          href=""
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpeg" width={80} height={80} alt="." />
          <strong>Playlist</strong>
          <button className="invisible ml-auto mr-5 flex size-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <FaPlay className="size-5" />
          </button>
        </a>
        <a
          href=""
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpeg" width={80} height={80} alt="." />
          <strong>Playlist</strong>
          <button className="invisible ml-auto mr-5 flex size-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <FaPlay className="size-5" />
          </button>
        </a>
        <a
          href=""
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpeg" width={80} height={80} alt="." />
          <strong>Playlist</strong>
          <button className="invisible ml-auto mr-5 flex size-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <FaPlay className="size-5" />
          </button>
        </a>
        <a
          href=""
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpeg" width={80} height={80} alt="." />
          <strong>Playlist</strong>
          <button className="invisible ml-auto mr-5 flex size-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <FaPlay className="size-5" />
          </button>
        </a>
        <a
          href=""
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpeg" width={80} height={80} alt="." />
          <strong>Playlist</strong>
          <button className="invisible ml-auto mr-5 flex size-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <FaPlay className="size-5" />
          </button>
        </a>
        <a
          href=""
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpeg" width={80} height={80} alt="." />
          <strong>Playlist</strong>
          <button className="invisible ml-auto mr-5 flex size-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <FaPlay className="size-5" />
          </button>
        </a>
      </div>
    </>
  );
}
