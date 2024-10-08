import Pages from "./pages";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    setNavHeight(document.querySelector("nav")?.clientHeight || 0);
  }, []);
  return (
    <>
      <Navbar />
      <Toaster />
      <main
        className="bg-gray-800 h-[100svh] w-screen overflow-y-scroll text-white"
        style={{ paddingTop: `${navHeight}px` }}
      >
        <Pages />
      </main>
    </>
  );
}
