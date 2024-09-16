import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 backdrop-blur-sm">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1 backdrop-blur-sm">
              <ChevronRight />
            </button>
          </div>

          <Content />
        </main>
      </div>
      <Footer />
    </div>
  );
}
