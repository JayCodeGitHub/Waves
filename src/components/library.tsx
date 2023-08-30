import { usePlayer } from "../hooks/usePlayer";
import { Songs } from "../assets/songs";

interface LibraryProps {
  isLibraryVisible: boolean;
  setIsLibraryVisible: (a: boolean) => void;
}

const Library = ({ isLibraryVisible, setIsLibraryVisible }: LibraryProps) => {
  const { setSong } = usePlayer();
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 transition-all duration-200 ease-in-out delay-0 ${
          isLibraryVisible
            ? " visible bg-opacity-50"
            : " invisible bg-opacity-0"
        }`}
        onClick={() => setIsLibraryVisible(false)}
      />
      <div
        className={`fixed top-0 left-0 z-20 h-full bg-white lg:w-96 w-64 transition-all duration-200 ease-in-out delay-0  ${
          isLibraryVisible ? " -translate-x-0" : " -translate-x-full"
        }`}
      >
        <h1>Library</h1>
        {Songs.map((item) => (
          <button key={item.id} onClick={() => setSong(item.id)}>
            <h1>{item.id}</h1>
          </button>
        ))}
      </div>
    </>
  );
};

export default Library;
