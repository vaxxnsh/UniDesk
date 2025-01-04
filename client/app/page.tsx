import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F2F4F7]">
        <Navbar/>
        <div className="flex items-center justify-center">
          <Main/>
        </div>
    </div>
  );
}
