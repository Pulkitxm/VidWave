import Pages from "./pages";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    setNavHeight(document.querySelector("nav")?.clientHeight || 0);
  }, []);
  return (
    <>
      <Navbar />
      <main
        className="bg-white h-[100svh] w-screen overflow-y-scroll"
        style={{ paddingTop: `${navHeight}px` }}
      >
        <Pages />
      </main>
    </>
  );
}
