import { useState } from "react";
import Library from "./components/library";
import Player from "./components/player";

function App() {
  const [isLibraryVisible, setIsLibraryVisible] = useState(false);
  return (
    <div className="w-screen flex justify-center flex-col items-center lg:py-10 py-5">
      <div className="lg:w-1/2 w-full px-5 flex justify-between gap-10">
        <h1 className=" text-xl font-bold">Waves</h1>
        <button
          className=" text-xl"
          onClick={() => setIsLibraryVisible((prevValue) => !prevValue)}
        >
          Library
        </button>
      </div>
      {isLibraryVisible ? <Library /> : null}
      <Player />
    </div>
  );
}

export default App;
