import Link, { LinkProps } from "next/link";

interface PlaylistProps extends LinkProps {
  children: string;
}

export function Playlist(props: PlaylistProps) {
  return (
    <div>
      <Link
        href={props.children}
        className="text-sm text-zinc-400 hover:text-zinc-100"
      >
        {props.children}
      </Link>
    </div>
  );
}
