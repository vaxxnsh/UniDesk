import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#191a1f]">
        <Navbar/>
        <div className="flex items-center justify-center">
          <Main/>
        </div>
    </div>
  );
}
