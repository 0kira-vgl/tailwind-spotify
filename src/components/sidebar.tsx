import { Home, Search, Library } from "lucide-react";
import { Playlist } from "./playlist";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-1.5">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
      </div>

      <nav className="mt-10 space-y-5">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Home />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 flex flex-col gap-2.5 border-t border-zinc-800 pt-6">
        <Playlist href="">driving at night</Playlist>
        <Playlist href="">white girs songs</Playlist>
        <Playlist href="">rockzinho</Playlist>
        <Playlist href="">sertas do bom</Playlist>
        <Playlist href="">phonk</Playlist>
        <Playlist href="">classic</Playlist>
      </nav>
    </aside>
  );
}
