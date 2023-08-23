import { useState } from "react";
import Library from "./components/library";
import Player from "./components/player";

function App() {
  const [isLibraryVisible, setIsLibraryVisible] = useState(false);
  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <div>
        <h1 className="text-red-500">Waves</h1>
        <button onClick={() => setIsLibraryVisible((prevValue) => !prevValue)}>
          Library
        </button>
      </div>
      {isLibraryVisible ? <Library /> : null}
      <Player />
    </div>
  );
}

export default App;
