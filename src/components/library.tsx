import { usePlayer } from "../hooks/usePlayer";
import { Songs } from "../assets/songs";

const Library = () => {
  const { setSong } = usePlayer();
  return (
    <div>
      <h1>Library</h1>
      {Songs.map((item) => (
        <button onClick={() => setSong(item.id)}>
          <h1>{item.id}</h1>
        </button>
      ))}
    </div>
  );
};

export default Library;
