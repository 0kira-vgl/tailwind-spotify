import Image from "next/image";

export function PlaylistsMadeFor() {
  return (
    <>
      <h2 className="mt-10 text-2xl font-semibold">Made for Kira</h2>

      <div className="mt-4 grid grid-cols-6 gap-4">
        <a
          href=""
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
        >
          <Image
            src="/album.jpeg"
            height={100}
            width={100}
            alt="."
            className="w-full"
          />

          <strong className="font-semibold">Daily Mix</strong>
          <span className="text-sm text-zinc-400">Linking Part, Skillet</span>
        </a>
        <a
          href=""
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
        >
          <Image
            src="/album.jpeg"
            height={100}
            width={100}
            alt="."
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix</strong>
          <span className="text-sm text-zinc-400">Linking Part, Skillet</span>
        </a>
        <a
          href=""
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
        >
          <Image
            src="/album.jpeg"
            height={100}
            width={100}
            alt="."
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix</strong>
          <span className="text-sm text-zinc-400">Linking Part, Skillet</span>
        </a>
        <a
          href=""
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
        >
          <Image
            src="/album.jpeg"
            height={100}
            width={100}
            alt="."
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix</strong>
          <span className="text-sm text-zinc-400">Linking Part, Skillet</span>
        </a>
        <a
          href=""
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
        >
          <Image
            src="/album.jpeg"
            height={100}
            width={100}
            alt="."
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix</strong>
          <span className="text-sm text-zinc-400">Linking Part, Skillet</span>
        </a>
      </div>
    </>
  );
}
